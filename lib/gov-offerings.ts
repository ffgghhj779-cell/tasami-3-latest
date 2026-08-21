/**
 * Concrete government offerings under each category.
 */
import type { GovKey } from "@/lib/content-keys";

export type GovOfferingDef = {
  key: string;
  slug: string;
  category: GovKey;
};

export const GOV_OFFERINGS: GovOfferingDef[] = [
  // —— الجوازات والإقامة ——
  { key: "domesticVisa", slug: "tashirat-amala-manziliya", category: "passports" },
  { key: "driverIqamaRenew", slug: "tajdid-iqama-saeq", category: "passports" },
  { key: "familyVisitVisa", slug: "tashirat-ziyara-ailiya", category: "passports" },
  { key: "touristVisitVisa", slug: "tashirat-ziyara-siyahiya", category: "passports" },
  { key: "workerIqamaRenew", slug: "tajdid-iqamat-amala", category: "passports" },
  { key: "exitReentryIssue", slug: "khuroj-wa-awda", category: "passports" },
  { key: "exitReentryExtend", slug: "tamdid-khuroj-wa-awda", category: "passports" },
  { key: "finalExit", slug: "khuroj-nihai", category: "passports" },
  { key: "consulateAppointment", slug: "mawid-qunsuliya", category: "passports" },

  // —— العمالة ——
  { key: "workVisaPermanent", slug: "tashirat-amal-daim", category: "labor" },
  { key: "workVisaTemporary", slug: "tashirat-amal-muwaqqat", category: "labor" },
  { key: "dropAbscondedWorker", slug: "isqat-amil-kharaj", category: "labor" },
  { key: "ajeerContract", slug: "aqd-ajeer", category: "labor" },
  { key: "changeProfession", slug: "tadil-mihna", category: "labor" },
  { key: "mudadWagesFile", slug: "raf-milaff-mudad", category: "labor" },

  // —— التجارة ——
  { key: "openCr", slug: "fath-sijill-tijari", category: "commerce" },
  { key: "renewCr", slug: "tajdid-sijill-tijari", category: "commerce" },
  { key: "addActivity", slug: "idafa-nashat", category: "commerce" },
  { key: "reserveTradeName", slug: "hajz-ism-tijari", category: "commerce" },
  { key: "cancelCr", slug: "shatb-sijill-muassasat", category: "commerce" },
  { key: "transferCrOwnership", slug: "naql-milkiyat-sijill", category: "commerce" },
  { key: "transferActivityLicense", slug: "naql-rukhsa-nashat", category: "commerce" },
  { key: "chamberMembership", slug: "ishtirak-ghurfa", category: "commerce" },
  { key: "chamberAttestation", slug: "tasdiq-ghurfa", category: "commerce" },
  { key: "mofaAttestation", slug: "tawthiq-kharijiya", category: "commerce" },
  { key: "mediaLicense", slug: "tarkhis-ilam", category: "commerce" },

  // —— البلدية ——
  { key: "municipalLicense", slug: "rukhsa-baladiya", category: "municipal" },
  { key: "wasteContract", slug: "aqd-nifayat", category: "municipal" },

  // —— الدفاع المدني ——
  { key: "safetyLicense", slug: "tarkhis-salama", category: "civilDefense" },

  // —— الصحة ——
  { key: "sfdaLicense", slug: "tarkhis-hayat-dawa", category: "health" },

  // —— المرور ——
  { key: "trafficAppointment", slug: "mawid-murur", category: "traffic" },

  // —— ناجز ——
  { key: "najizAppointment", slug: "hajz-najiz-tasahil", category: "najiz" },

  // —— التأمينات / الضمان ——
  { key: "socialInsuranceReg", slug: "tasjil-daman-ijtimaei", category: "gosi" },

  // —— الأحوال / المواطن ——
  { key: "noorRegistration", slug: "tasjil-noor", category: "civilStatus" },
  { key: "citizenAccount", slug: "hisab-almuwatin", category: "civilStatus" },

  // —— الزكاة والضريبة ——
  { key: "vatFiling", slug: "raf-daribat-qima", category: "zakat" },
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
