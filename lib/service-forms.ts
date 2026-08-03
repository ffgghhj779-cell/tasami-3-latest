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

  // —— Concrete gov offerings ——
  domesticVisa: {
    docs: ["idIqama", "passportCopy", "sponsorAuth", "photos", "musanedAccess"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "nationality", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  driverIqamaRenew: {
    docs: ["idIqama", "passportCopy", "sponsorAuth", "license"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "iqamaExpiry", type: "date", required: true },
      { id: "sponsorId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  familyVisitVisa: {
    docs: ["idIqama", "passportCopy", "sponsorAuth", "familyCard"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "visitorName", type: "text", required: true },
      { id: "passportNumber", type: "text", required: true },
      { id: "relationType", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  touristVisitVisa: {
    docs: ["passportCopy", "idIqama", "photos"],
    fields: [
      { id: "visitorName", type: "text", required: true },
      { id: "passportNumber", type: "text", required: true },
      { id: "nationality", type: "text", required: true },
      { id: "travelDate", type: "date" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  workerIqamaRenew: {
    docs: ["idIqama", "passportCopy", "sponsorAuth", "qiwaAccess"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "iqamaExpiry", type: "date", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "establishmentName", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  exitReentryIssue: {
    docs: ["idIqama", "passportCopy", "sponsorAuth"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "travelDate", type: "date", required: true },
      { id: "visaDuration", type: "select", required: true, options: ["days30", "days60", "days90", "other"] },
      { id: "details", type: "textarea", required: true },
    ],
  },
  exitReentryExtend: {
    docs: ["idIqama", "passportCopy", "sponsorAuth"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "currentVisaExpiry", type: "date", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  finalExit: {
    docs: ["idIqama", "passportCopy", "sponsorAuth"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "travelDate", type: "date" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  consulateAppointment: {
    docs: ["idIqama", "passportCopy", "relevantDocs"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "consulateCity", type: "text", required: true },
      { id: "appointmentPurpose", type: "text", required: true },
      { id: "preferredDate", type: "date" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  workVisaPermanent: {
    docs: ["idIqama", "crCopy", "qiwaAccess", "contractCopy", "passportCopy"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "nationality", type: "text", required: true },
      { id: "profession", type: "text", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  workVisaTemporary: {
    docs: ["idIqama", "crCopy", "qiwaAccess", "passportCopy"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "nationality", type: "text", required: true },
      { id: "visaDuration", type: "text", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  dropAbscondedWorker: {
    docs: ["idIqama", "crCopy", "qiwaAccess", "policeReport"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text" },
      { id: "exitDate", type: "date" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  ajeerContract: {
    docs: ["idIqama", "crCopy", "contractCopy"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "contractPeriod", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  changeProfession: {
    docs: ["idIqama", "crCopy", "qiwaAccess", "qualification"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "currentProfession", type: "text", required: true },
      { id: "newProfession", type: "text", required: true },
      { id: "establishmentName", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  mudadWagesFile: {
    docs: ["crCopy", "payroll", "qiwaAccess"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "payrollMonth", type: "text", required: true },
      { id: "workersCount", type: "number", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  openCr: {
    docs: ["nationalId", "leaseContract", "ownerId"],
    fields: [
      { id: "activityType", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "tradeName", type: "text", required: true },
      { id: "nationalId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  renewCr: {
    docs: ["nationalId", "crCopy"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "establishmentName", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  addActivity: {
    docs: ["nationalId", "crCopy"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "activityType", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  reserveTradeName: {
    docs: ["nationalId"],
    fields: [
      { id: "tradeName", type: "text", required: true },
      { id: "activityType", type: "text", required: true },
      { id: "nationalId", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  cancelCr: {
    docs: ["nationalId", "crCopy", "ownerId"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "establishmentName", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  transferCrOwnership: {
    docs: ["nationalId", "crCopy", "ownerId", "buyerId"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "sellerName", type: "text", required: true },
      { id: "buyerName", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  transferActivityLicense: {
    docs: ["nationalId", "crCopy", "licenseCopy"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "licenseNumber", type: "text", required: true },
      { id: "activityType", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  chamberMembership: {
    docs: ["nationalId", "crCopy"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  chamberAttestation: {
    docs: ["crCopy", "documentToAttest", "nationalId"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "documentType", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  mofaAttestation: {
    docs: ["documentToAttest", "nationalId", "passportCopy"],
    fields: [
      { id: "documentType", type: "text", required: true },
      { id: "nationalId", type: "text", required: true },
      { id: "destinationCountry", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  mediaLicense: {
    docs: ["nationalId", "crCopy", "brandAssets"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text" },
      { id: "mediaActivity", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  municipalLicense: {
    docs: ["crCopy", "leaseContract", "sketch", "idIqama"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "district", type: "text" },
      { id: "activityType", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  wasteContract: {
    docs: ["crCopy", "leaseContract", "idIqama"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  safetyLicense: {
    docs: ["crCopy", "floorPlan", "safetyReport", "idIqama"],
    fields: [
      { id: "establishmentName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "buildingType", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  sfdaLicense: {
    docs: ["crCopy", "idIqama", "medicalReport", "facilityDocs"],
    fields: [
      { id: "facilityName", type: "text", required: true },
      { id: "crNumber", type: "text", required: true },
      { id: "licensePurpose", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  trafficAppointment: {
    docs: ["idIqama", "license", "vehicleReg"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "appointmentPurpose", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "preferredDate", type: "date" },
      { id: "plateNumber", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  najizAppointment: {
    docs: ["idIqama", "relevantDocs"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "appointmentPurpose", type: "text", required: true },
      { id: "caseNumber", type: "text" },
      { id: "preferredDate", type: "date" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  socialInsuranceReg: {
    docs: ["idIqama", "nationalId", "relevantDocs"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "fullNameArabic", type: "text", required: true },
      { id: "city", type: "text", required: true },
      { id: "details", type: "textarea", required: true },
    ],
  },
  noorRegistration: {
    docs: ["idIqama", "familyCard", "birthDeath"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "studentName", type: "text", required: true },
      { id: "schoolName", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  citizenAccount: {
    docs: ["idIqama", "nationalId", "ibanProof"],
    fields: [
      { id: "nationalId", type: "text", required: true },
      { id: "mobileNumber", type: "tel", required: true },
      { id: "iban", type: "text" },
      { id: "details", type: "textarea", required: true },
    ],
  },
  vatFiling: {
    docs: ["crCopy", "financials", "nationalId"],
    fields: [
      { id: "crNumber", type: "text", required: true },
      { id: "tinNumber", type: "text", required: true },
      { id: "fiscalPeriod", type: "text", required: true },
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
