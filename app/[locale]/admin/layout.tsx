import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { setRequestLocale } from "next-intl/server";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { getSession } from "@/lib/auth";

export default async function AdminLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  const session = await getSession();
  if (!session) {
    redirect(`/${params.locale}/login`);
  }
  if (session.role !== "ADMIN") {
    redirect(`/${params.locale}/my-requests`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-tasami-offwhite md:flex-row">
      <AdminSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {children}
        </div>
      </div>
    </div>
  );
}
