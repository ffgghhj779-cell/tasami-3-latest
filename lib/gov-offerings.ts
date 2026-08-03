/**
 * Concrete government offerings under each category.
 * Shown on category pages; each has its own detail + request form.
 */
import type { GovKey } from "@/lib/content-keys";

export type GovOfferingDef = {
  key: string;
  slug: string;
  category: GovKey;
  priceFrom: number;
};

export const GOV_OFFERINGS: GovOfferingDef[] = [
  // —— الجوازات والإقامة ——
  { key: "domesticVisa", slug: "tashirat-amala-manziliya", category: "passports", priceFrom: 349 },
  { key: "driverIqamaRenew", slug: "tajdid-iqama-saeq", category: "passports", priceFrom: 199 },
  { key: "familyVisitVisa", slug: "tashirat-ziyara-ailiya", category: "passports", priceFrom: 279 },
  { key: "touristVisitVisa", slug: "tashirat-ziyara-siyahiya", category: "passports", priceFrom: 299 },
  { key: "workerIqamaRenew", slug: "tajdid-iqamat-amala", category: "passports", priceFrom: 179 },
  { key: "exitReentryIssue", slug: "khuroj-wa-awda", category: "passports", priceFrom: 149 },
  { key: "exitReentryExtend", slug: "tamdid-khuroj-wa-awda", category: "passports", priceFrom: 129 },
  { key: "finalExit", slug: "khuroj-nihai", category: "passports", priceFrom: 149 },
  { key: "consulateAppointment", slug: "mawid-qunsuliya", category: "passports", priceFrom: 99 },

  // —— العمالة ——
  { key: "workVisaPermanent", slug: "tashirat-amal-daim", category: "labor", priceFrom: 399 },
  { key: "workVisaTemporary", slug: "tashirat-amal-muwaqqat", category: "labor", priceFrom: 349 },
  { key: "dropAbscondedWorker", slug: "isqat-amil-kharaj", category: "labor", priceFrom: 249 },
  { key: "ajeerContract", slug: "aqd-ajeer", category: "labor", priceFrom: 179 },
  { key: "changeProfession", slug: "tadil-mihna", category: "labor", priceFrom: 199 },
  { key: "mudadWagesFile", slug: "raf-milaff-mudad", category: "labor", priceFrom: 159 },

  // —— التجارة ——
  { key: "openCr", slug: "fath-sijill-tijari", category: "commerce", priceFrom: 299 },
  { key: "renewCr", slug: "tajdid-sijill-tijari", category: "commerce", priceFrom: 199 },
  { key: "addActivity", slug: "idafa-nashat", category: "commerce", priceFrom: 179 },
  { key: "reserveTradeName", slug: "hajz-ism-tijari", category: "commerce", priceFrom: 149 },
  { key: "cancelCr", slug: "shatb-sijill-muassasat", category: "commerce", priceFrom: 229 },
  { key: "transferCrOwnership", slug: "naql-milkiyat-sijill", category: "commerce", priceFrom: 399 },
  { key: "transferActivityLicense", slug: "naql-rukhsa-nashat", category: "commerce", priceFrom: 349 },
  { key: "chamberMembership", slug: "ishtirak-ghurfa", category: "commerce", priceFrom: 149 },
  { key: "chamberAttestation", slug: "tasdiq-ghurfa", category: "commerce", priceFrom: 129 },
  { key: "mofaAttestation", slug: "tawthiq-kharijiya", category: "commerce", priceFrom: 179 },
  { key: "mediaLicense", slug: "tarkhis-ilam", category: "commerce", priceFrom: 449 },

  // —— البلدية ——
  { key: "municipalLicense", slug: "rukhsa-baladiya", category: "municipal", priceFrom: 249 },
  { key: "wasteContract", slug: "aqd-nifayat", category: "municipal", priceFrom: 149 },

  // —— الدفاع المدني ——
  { key: "safetyLicense", slug: "tarkhis-salama", category: "civilDefense", priceFrom: 349 },

  // —— الصحة ——
  { key: "sfdaLicense", slug: "tarkhis-hayat-dawa", category: "health", priceFrom: 599 },

  // —— المرور ——
  { key: "trafficAppointment", slug: "mawid-murur", category: "traffic", priceFrom: 79 },

  // —— ناجز ——
  { key: "najizAppointment", slug: "hajz-najiz-tasahil", category: "najiz", priceFrom: 99 },

  // —— التأمينات / الضمان ——
  { key: "socialInsuranceReg", slug: "tasjil-daman-ijtimaei", category: "gosi", priceFrom: 149 },

  // —— الأحوال / المواطن ——
  { key: "noorRegistration", slug: "tasjil-noor", category: "civilStatus", priceFrom: 99 },
  { key: "citizenAccount", slug: "hisab-almuwatin", category: "civilStatus", priceFrom: 99 },

  // —— الزكاة والضريبة ——
  { key: "vatFiling", slug: "raf-daribat-qima", category: "zakat", priceFrom: 249 },
];

export function offeringsByCategory(category: GovKey): GovOfferingDef[] {
  return GOV_OFFERINGS.filter((o) => o.category === category);
}

export function findOffering(
  categorySlug: string,
  offeringSlug: string,
  categoryKey: GovKey
): GovOfferingDef | undefined {
  return GOV_OFFERINGS.find(
    (o) => o.category === categoryKey && o.slug === offeringSlug
  );
}

export function findOfferingByKey(key: string): GovOfferingDef | undefined {
  return GOV_OFFERINGS.find((o) => o.key === key);
}

export const GOV_OFFERING_KEYS = GOV_OFFERINGS.map((o) => o.key);
