import { getContactEmail, getWhatsAppNumber, whatsappUrl } from "@/lib/site";

const STATUS_AR: Record<string, string> = {
  PENDING: "قيد الانتظار",
  IN_PROGRESS: "قيد التنفيذ",
  WAITING: "بانتظار مستندات",
  COMPLETED: "مكتمل",
  DONE: "منجز",
  CANCELLED: "ملغى",
};

type NotifyStatusArgs = {
  customerName: string;
  customerPhone: string;
  customerEmail?: string | null;
  serviceName: string;
  status: string;
  requestId: string;
};

/** Send status update via Resend (if configured) + log WhatsApp deep-link for ops. */
export async function notifyRequestStatusChange(args: NotifyStatusArgs) {
  const statusLabel = STATUS_AR[args.status] || args.status;
  const waText = `مرحباً ${args.customerName}، تم تحديث حالة طلبك «${args.serviceName}» إلى: ${statusLabel}. رقم الطلب: ${args.requestId}`;
  const waLink = whatsappUrl(waText);

  const results = {
    email: false as boolean | "skipped",
    whatsappLink: waLink,
  };

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = args.customerEmail?.trim();
  if (!apiKey || !to) {
    results.email = "skipped";
  } else {
    try {
      const from =
        process.env.RESEND_FROM_EMAIL?.trim() ||
        `Tasami <${getContactEmail()}>`;
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `تحديث طلب تسامي — ${statusLabel}`,
          html: `
            <div dir="rtl" style="font-family:Tahoma,sans-serif;line-height:1.7;color:#212529">
              <h2 style="color:#2E1A47">تسامي</h2>
              <p>مرحباً ${escapeHtml(args.customerName)}،</p>
              <p>تم تحديث حالة طلبك <strong>${escapeHtml(args.serviceName)}</strong> إلى:</p>
              <p style="font-size:18px;color:#F4A261"><strong>${escapeHtml(statusLabel)}</strong></p>
              <p style="color:#6C757D;font-size:13px">رقم الطلب: ${escapeHtml(args.requestId)}</p>
              <p><a href="${waLink}" style="color:#25D366">متابعة عبر واتساب</a></p>
            </div>
          `,
        }),
      });
      results.email = res.ok;
      if (!res.ok) {
        console.error("[notify] Resend failed", await res.text());
      }
    } catch (err) {
      console.error("[notify] email error", err);
      results.email = false;
    }
  }

  // Optional ops webhook (n8n) — secretary can open WhatsApp link
  const webhook = process.env.NOTIFY_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "request_status",
          ...args,
          statusLabel,
          whatsappLink: waLink,
          whatsappNumber: getWhatsAppNumber(),
        }),
      });
    } catch (err) {
      console.error("[notify] webhook error", err);
    }
  }

  return results;
}

export async function notifyNewRequest(args: {
  customerName: string;
  customerPhone: string;
  customerEmail?: string | null;
  serviceName: string;
  requestId: string;
}) {
  const webhook = process.env.NOTIFY_WEBHOOK_URL?.trim();
  const waLink = whatsappUrl(
    `طلب جديد من ${args.customerName} (${args.customerPhone}): ${args.serviceName} — ${args.requestId}`
  );

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "new_request", ...args, whatsappLink: waLink }),
      });
    } catch (err) {
      console.error("[notify] new request webhook", err);
    }
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const adminMail =
    process.env.ADMIN_NOTIFY_EMAIL?.trim() || getContactEmail();
  if (apiKey && adminMail) {
    try {
      const from =
        process.env.RESEND_FROM_EMAIL?.trim() ||
        `Tasami <${getContactEmail()}>`;
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [adminMail],
          subject: `طلب خدمة جديد — ${args.serviceName}`,
          html: `<div dir="rtl"><p>طلب جديد من ${escapeHtml(args.customerName)}</p><p>${escapeHtml(args.customerPhone)}</p><p>${escapeHtml(args.serviceName)}</p><p>${escapeHtml(args.requestId)}</p><p><a href="${waLink}">واتساب</a></p></div>`,
        }),
      });
    } catch (err) {
      console.error("[notify] admin email", err);
    }
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
