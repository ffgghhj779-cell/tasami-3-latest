import { getContactEmail, getWhatsAppNumber, whatsappUrl } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

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
  const isDone = args.status === "DONE" || args.status === "COMPLETED";
  const reviewLink = isDone
    ? `${SITE_URL}/ar/my-requests?order=${encodeURIComponent(args.requestId.replace(/^#/, ""))}#review`
    : null;
  const waText =
    `مرحباً ${args.customerName}، تم تحديث حالة طلبك «${args.serviceName}» إلى: ${statusLabel}. رقم الطلب: ${args.requestId}` +
    (reviewLink ? `\nيسعدنا تقييمك لتجربتك معنا: ${reviewLink}` : "");
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
              <h2 style="color:#007AFF">تسامي</h2>
              <p>مرحباً ${escapeHtml(args.customerName)}،</p>
              <p>تم تحديث حالة طلبك <strong>${escapeHtml(args.serviceName)}</strong> إلى:</p>
              <p style="font-size:18px;color:#007AFF"><strong>${escapeHtml(statusLabel)}</strong></p>
              <p style="color:#6C757D;font-size:13px">رقم الطلب: ${escapeHtml(args.requestId)}</p>
              ${reviewLink ? `<p>يسعدنا تقييمك لتجربتك معنا — رأيك يساعد غيرك يختار بثقة:</p><p><a href="${reviewLink}" style="display:inline-block;background:#0057B8;color:#fff;padding:10px 18px;border-radius:10px;text-decoration:none">قيّم تجربتك</a></p>` : ""}
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

/** Tell the team a new review is waiting for approval in the admin panel. */
export async function notifyNewReview(args: {
  rating: number;
  text: string;
  name: string;
  orderLabel: string;
}) {
  const stars = "★".repeat(args.rating) + "☆".repeat(5 - args.rating);
  const reviewer = args.name || "عميل";

  const webhook = process.env.NOTIFY_WEBHOOK_URL?.trim();
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "new_review", ...args, stars }),
      });
    } catch (err) {
      console.error("[notify] new review webhook", err);
    }
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const adminMail = process.env.ADMIN_NOTIFY_EMAIL?.trim() || getContactEmail();
  if (apiKey && adminMail) {
    try {
      const from = process.env.RESEND_FROM_EMAIL?.trim() || `Tasami <${getContactEmail()}>`;
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [adminMail],
          subject: `تقييم جديد بانتظار الموافقة — ${stars}`,
          html: `<div dir="rtl" style="font-family:Tahoma,sans-serif;line-height:1.7"><p><strong>${escapeHtml(reviewer)}</strong> · ${escapeHtml(args.orderLabel)}</p><p style="color:#c8a84b;font-size:18px">${stars}</p><p>${escapeHtml(args.text)}</p><p>راجِع التقييم ووافق عليه من لوحة التحكم ← التقييمات.</p></div>`,
        }),
      });
    } catch (err) {
      console.error("[notify] new review email", err);
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
