/** Per-service request form schema — fields + required docs keyed by subcategory */

export type FieldType =
  | "text"
  | "tel"
  | "email"
  | "select"
  | "textarea"
  | "number"
  | "date";

export type ServiceField = {
  id: string;
  type: FieldType;
  required?: boolean;
  /** i18n option keys under request.options.{fieldId}.* */
  options?: string[];
};

export type ServiceFormDef = {
  fields: ServiceField[];
  /** i18n keys under request.docs.* */
  docs: string[];
};

const COMMON_CONTACT: ServiceField[] = [];

export const SERVICE_FORMS: Record<string, ServiceFormDef> = {
  // —— Government ——
  passports: {
    docs: ["idIqama", "passportCopy", "photos", "sponsorAuth"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: [
          "iqamaRenew",
          "exitReentry",
          "visitVisa",
          "finalExit",
          "transfer",
          "other",
        ],
      },
      { id: "nationalId", type: "text", required: true },
      { id: "iqamaExpiry", type: "date" },
      { id: "workersCount", type: "number" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  labor: {
    docs: ["idIqama", "crCopy", "qiwaAccess", "contractCopy"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: [
          "contract",
          "sponsorshipTransfer",
          "qiwa",
          "musaned",
          "workPermit",
          "other",
        ],
      },
      { id: "crNumber", type: "text" },
      { id: "establishmentName", type: "text", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "nationalId", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  commerce: {
    docs: ["nationalId", "crCopy", "articles", "ownerId"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: [
          "newCr",
          "crRenew",
          "crUpdate",
          "tradeName",
          "license",
          "other",
        ],
      },
      { id: "crNumber", type: "text" },
      { id: "activityType", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  zakat: {
    docs: ["crCopy", "financials", "nationalId"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["registration", "returnFiling", "certificate", "amendment", "other"],
      },
      { id: "crNumber", type: "text", required: true },
      { id: "tinNumber", type: "text" },
      { id: "fiscalYear", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  municipal: {
    docs: ["crCopy", "leaseContract", "sketch", "idIqama"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["shopLicense", "renewal", "healthCert", "signage", "other"],
      },
      { id: "city", type: "text", required: true },
      { id: "district", type: "text" },
      { id: "activityType", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  civilDefense: {
    docs: ["crCopy", "floorPlan", "safetyReport", "idIqama"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["newPermit", "renewal", "inspection", "other"],
      },
      { id: "establishmentName", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "buildingType", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  gosi: {
    docs: ["crCopy", "idIqama", "payroll"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["registration", "addEmployee", "removeEmployee", "certificate", "other"],
      },
      { id: "crNumber", type: "text", required: true },
      { id: "gosiNumber", type: "text" },
      { id: "workersCount", type: "number" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  civilStatus: {
    docs: ["idIqama", "familyCard", "birthDeath"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["birth", "marriage", "familyCard", "idIssue", "other"],
      },
      { id: "nationalId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  najiz: {
    docs: ["idIqama", "agencyDoc", "caseDocs"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["lawsuit", "execution", "agency", "notary", "other"],
      },
      { id: "caseNumber", type: "text" },
      { id: "nationalId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  traffic: {
    docs: ["idIqama", "license", "vehicleReg"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["licenseRenew", "vehicleTransfer", "plates", "violation", "other"],
      },
      { id: "nationalId", type: "text", required: true },
      { id: "plateNumber", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  health: {
    docs: ["idIqama", "medicalReport", "crCopy"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["facilityLicense", "practitioner", "sehaty", "other"],
      },
      { id: "facilityName", type: "text" },
      { id: "nationalId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  ejar: {
    docs: ["idIqama", "leaseContract", "propertyDeed"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["newContract", "renewal", "terminate", "dispute", "other"],
      },
      { id: "propertyCity", type: "text", required: true },
      { id: "contractNumber", type: "text" },
      { id: "nationalId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  investment: {
    docs: ["passportCopy", "businessPlan", "crCopy", "nationalId"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["misaLicense", "companySetup", "branch", "other"],
      },
      { id: "nationality", type: "text", required: true },
      { id: "investmentSector", type: "text", required: true },
      { id: "capitalEstimate", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },

  // —— Tech ——
  websites: {
    docs: ["brandAssets", "contentDraft", "domainInfo"],
    fields: [
      {
        id: "projectType",
        type: "select",
        required: true,
        options: ["corporate", "ecommerce", "landing", "redesign", "other"],
      },
      { id: "businessName", type: "text", required: true },
      { id: "hasDomain", type: "select", required: true, options: ["yes", "no", "needHelp"] },
      { id: "pagesEstimate", type: "number" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  mobile: {
    docs: ["brandAssets", "appWireframes", "storeAccounts"],
    fields: [
      {
        id: "platform",
        type: "select",
        required: true,
        options: ["ios", "android", "both", "other"],
      },
      { id: "appPurpose", type: "text", required: true },
      { id: "hasDesign", type: "select", required: true, options: ["yes", "no", "partial"] },
      { id: "details", type: "textarea", required: true },
    ],
  },
  maps: {
    docs: ["businessAddress", "crCopy", "photos"],
    fields: [
      {
        id: "serviceType",
        type: "select",
        required: true,
        options: ["googleBusiness", "mapsPin", "reviewMgmt", "other"],
      },
      { id: "businessName", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  marketing: {
    docs: ["brandAssets", "targetAudience", "adAccounts"],
    fields: [
      {
        id: "channel",
        type: "select",
        required: true,
        options: ["social", "ads", "seo", "full", "other"],
      },
      { id: "businessName", type: "text", required: true },
      { id: "monthlyBudget", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  automation: {
    docs: ["currentTools", "processMap"],
    fields: [
      {
        id: "automationGoal",
        type: "select",
        required: true,
        options: ["whatsappFlow", "crm", "invoicing", "hr", "other"],
      },
      { id: "currentSoftware", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  support: {
    docs: ["systemAccess", "issueLog"],
    fields: [
      {
        id: "supportType",
        type: "select",
        required: true,
        options: ["helpdesk", "maintenance", "onCall", "other"],
      },
      { id: "systemsInUse", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  ai: {
    docs: ["useCaseBrief", "dataSample"],
    fields: [
      {
        id: "aiUseCase",
        type: "select",
        required: true,
        options: ["chatbot", "content", "internalTools", "vision", "other"],
      },
      { id: "businessName", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  data: {
    docs: ["dataSources", "kpiList"],
    fields: [
      {
        id: "dataNeed",
        type: "select",
        required: true,
        options: ["dashboard", "reporting", "migration", "analysis", "other"],
      },
      { id: "dataSources", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  cloud: {
    docs: ["infraList", "accessNeeds"],
    fields: [
      {
        id: "cloudNeed",
        type: "select",
        required: true,
        options: ["hosting", "migration", "backup", "security", "other"],
      },
      { id: "currentHost", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
};

export function getServiceForm(subcategory?: string): ServiceFormDef {
  if (subcategory && SERVICE_FORMS[subcategory]) {
    return SERVICE_FORMS[subcategory];
  }
  return {
    docs: ["idIqama", "relevantDocs"],
    fields: [
      ...COMMON_CONTACT,
      { id: "details", type: "textarea", required: true },
    ],
  };
}

export function formatServiceAnswers(
  fields: ServiceField[],
  answers: Record<string, string>,
  labelFn: (fieldId: string) => string,
  optionFn: (fieldId: string, option: string) => string
): string {
  const lines: string[] = [];
  for (const field of fields) {
    const raw = answers[field.id]?.trim();
    if (!raw) continue;
    const value =
      field.type === "select" ? optionFn(field.id, raw) : raw;
    lines.push(`${labelFn(field.id)}: ${value}`);
  }
  return lines.join("\n");
}
