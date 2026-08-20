/**
 * Concrete government offerings under each category.
 *
 * Prices = Tasami service fees (SAR), not government fees.
 * Edit priceFrom / priceTo here only — UI reads from this file.
 */
import type { GovKey } from "@/lib/content-keys";

export type GovOfferingDef = {
  key: string;
  slug: string;
  category: GovKey;
  /** Service fee starting price (SAR) */
  priceFrom: number;
  /** Optional upper bound for transparent range display */
  priceTo?: number;
};

export const GOV_OFFERINGS: GovOfferingDef[] = [
  // —— الجوازات والإقامة ——
  { key: "domesticVisa", slug: "tashirat-amala-manziliya", category: "passports", priceFrom: 450, priceTo: 750 },
  { key: "driverIqamaRenew", slug: "tajdid-iqama-saeq", category: "passports", priceFrom: 250, priceTo: 400 },
  { key: "familyVisitVisa", slug: "tashirat-ziyara-ailiya", category: "passports", priceFrom: 350, priceTo: 550 },
  { key: "touristVisitVisa", slug: "tashirat-ziyara-siyahiya", category: "passports", priceFrom: 300, priceTo: 500 },
  { key: "workerIqamaRenew", slug: "tajdid-iqamat-amala", category: "passports", priceFrom: 200, priceTo: 350 },
  { key: "exitReentryIssue", slug: "khuroj-wa-awda", category: "passports", priceFrom: 180, priceTo: 300 },
  { key: "exitReentryExtend", slug: "tamdid-khuroj-wa-awda", category: "passports", priceFrom: 150, priceTo: 250 },
  { key: "finalExit", slug: "khuroj-nihai", category: "passports", priceFrom: 180, priceTo: 280 },
  { key: "consulateAppointment", slug: "mawid-qunsuliya", category: "passports", priceFrom: 120, priceTo: 200 },

  // —— العمالة ——
  { key: "workVisaPermanent", slug: "tashirat-amal-daim", category: "labor", priceFrom: 550, priceTo: 900 },
  { key: "workVisaTemporary", slug: "tashirat-amal-muwaqqat", category: "labor", priceFrom: 450, priceTo: 750 },
  { key: "dropAbscondedWorker", slug: "isqat-amil-kharaj", category: "labor", priceFrom: 350, priceTo: 550 },
  { key: "ajeerContract", slug: "aqd-ajeer", category: "labor", priceFrom: 220, priceTo: 380 },
  { key: "changeProfession", slug: "tadil-mihna", category: "labor", priceFrom: 280, priceTo: 450 },
  { key: "mudadWagesFile", slug: "raf-milaff-mudad", category: "labor", priceFrom: 200, priceTo: 350 },

  // —— التجارة ——
  { key: "openCr", slug: "fath-sijill-tijari", category: "commerce", priceFrom: 400, priceTo: 700 },
  { key: "renewCr", slug: "tajdid-sijill-tijari", category: "commerce", priceFrom: 250, priceTo: 400 },
  { key: "addActivity", slug: "idafa-nashat", category: "commerce", priceFrom: 220, priceTo: 380 },
  { key: "reserveTradeName", slug: "hajz-ism-tijari", category: "commerce", priceFrom: 180, priceTo: 300 },
  { key: "cancelCr", slug: "shatb-sijill-muassasat", category: "commerce", priceFrom: 300, priceTo: 500 },
  { key: "transferCrOwnership", slug: "naql-milkiyat-sijill", category: "commerce", priceFrom: 600, priceTo: 1100 },
  { key: "transferActivityLicense", slug: "naql-rukhsa-nashat", category: "commerce", priceFrom: 500, priceTo: 900 },
  { key: "chamberMembership", slug: "ishtirak-ghurfa", category: "commerce", priceFrom: 180, priceTo: 300 },
  { key: "chamberAttestation", slug: "tasdiq-ghurfa", category: "commerce", priceFrom: 150, priceTo: 280 },
  { key: "mofaAttestation", slug: "tawthiq-kharijiya", category: "commerce", priceFrom: 220, priceTo: 400 },
  { key: "mediaLicense", slug: "tarkhis-ilam", category: "commerce", priceFrom: 700, priceTo: 1400 },

  // —— البلدية ——
  { key: "municipalLicense", slug: "rukhsa-baladiya", category: "municipal", priceFrom: 350, priceTo: 650 },
  { key: "wasteContract", slug: "aqd-nifayat", category: "municipal", priceFrom: 180, priceTo: 320 },

  // —— الدفاع المدني ——
  { key: "safetyLicense", slug: "tarkhis-salama", category: "civilDefense", priceFrom: 500, priceTo: 950 },

  // —— الصحة ——
  { key: "sfdaLicense", slug: "tarkhis-hayat-dawa", category: "health", priceFrom: 900, priceTo: 1800 },

  // —— المرور ——
  { key: "trafficAppointment", slug: "mawid-murur", category: "traffic", priceFrom: 100, priceTo: 180 },

  // —— ناجز ——
  { key: "najizAppointment", slug: "hajz-najiz-tasahil", category: "najiz", priceFrom: 120, priceTo: 220 },

  // —— التأمينات / الضمان ——
  { key: "socialInsuranceReg", slug: "tasjil-daman-ijtimaei", category: "gosi", priceFrom: 180, priceTo: 320 },

  // —— الأحوال / المواطن ——
  { key: "noorRegistration", slug: "tasjil-noor", category: "civilStatus", priceFrom: 120, priceTo: 200 },
  { key: "citizenAccount", slug: "hisab-almuwatin", category: "civilStatus", priceFrom: 120, priceTo: 200 },

  // —— الزكاة والضريبة ——
  { key: "vatFiling", slug: "raf-daribat-qima", category: "zakat", priceFrom: 350, priceTo: 700 },
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
