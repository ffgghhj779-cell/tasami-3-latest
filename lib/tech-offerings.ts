/**
 * Concrete tech offerings under each tech category.
 */
import type { TechKey } from "@/lib/content-keys";

export type TechOfferingDef = {
  key: string;
  slug: string;
  category: TechKey;
  /** Request form to reuse from SERVICE_FORMS */
  form: string;
};

export const TECH_OFFERINGS: TechOfferingDef[] = [
  // —— المواقع والمتاجر ——
  { key: "ecommerceStore", slug: "ecommerce", category: "websites", form: "websites" },
  { key: "sallaStore", slug: "salla", category: "websites", form: "websites" },
  { key: "zidStore", slug: "zid", category: "websites", form: "websites" },
  { key: "shopifyStore", slug: "shopify", category: "websites", form: "websites" },
  { key: "paymentsShipping", slug: "payments-shipping", category: "websites", form: "websites" },
  { key: "uiuxDesign", slug: "ui-ux-design", category: "websites", form: "websites" },

  // —— الأتمتة والأنظمة ——
  { key: "crmSystem", slug: "crm", category: "automation", form: "automation" },
  { key: "erpPos", slug: "erp-pos", category: "automation", form: "automation" },
  { key: "whatsappApi", slug: "whatsapp-api", category: "automation", form: "automation" },
  { key: "customSoftware", slug: "custom-software", category: "automation", form: "automation" },

  // —— الذكاء الاصطناعي ——
  { key: "aiChatbot", slug: "chatbot", category: "ai", form: "ai" },
];

export function techOfferingsByCategory(category: TechKey): TechOfferingDef[] {
  return TECH_OFFERINGS.filter((o) => o.category === category);
}

export function findTechOffering(category: TechKey, slug: string): TechOfferingDef | undefined {
  return TECH_OFFERINGS.find((o) => o.category === category && o.slug === slug);
}
