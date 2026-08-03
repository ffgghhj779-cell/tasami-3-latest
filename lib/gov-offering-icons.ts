import type { ComponentType, SVGProps } from "react";
import {
  IdentificationCard,
  House,
  UsersThree,
  AirplaneTilt,
  ArrowsClockwise,
  AirplaneTakeoff,
  ClockCountdown,
  SignOut,
  Flag,
  Briefcase,
  Timer,
  UserMinus,
  FileText,
  Swap,
  CurrencyCircleDollar,
  Storefront,
  ArrowClockwise,
  PlusCircle,
  TextAa,
  Trash,
  Handshake,
  Certificate,
  Stamp,
  GlobeHemisphereWest,
  Megaphone,
  Recycle,
  ShieldCheck,
  FirstAid,
  Car,
  Gavel,
  SealCheck,
  Student,
  Wallet,
  Receipt,
  City,
  UserCircleGear,
} from "@phosphor-icons/react/dist/ssr";

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & {
    weight?: "regular" | "fill" | "bold" | "light" | "thin" | "duotone";
  }
>;

/** Unique icon per concrete government offering */
export const GOV_OFFERING_ICONS: Record<string, PhosphorIcon> = {
  domesticVisa: House,
  driverIqamaRenew: IdentificationCard,
  familyVisitVisa: UsersThree,
  touristVisitVisa: AirplaneTilt,
  workerIqamaRenew: ArrowsClockwise,
  exitReentryIssue: AirplaneTakeoff,
  exitReentryExtend: ClockCountdown,
  finalExit: SignOut,
  consulateAppointment: Flag,
  workVisaPermanent: Briefcase,
  workVisaTemporary: Timer,
  dropAbscondedWorker: UserMinus,
  ajeerContract: FileText,
  changeProfession: Swap,
  mudadWagesFile: CurrencyCircleDollar,
  openCr: Storefront,
  renewCr: ArrowClockwise,
  addActivity: PlusCircle,
  reserveTradeName: TextAa,
  cancelCr: Trash,
  transferCrOwnership: Handshake,
  transferActivityLicense: Certificate,
  chamberMembership: UserCircleGear,
  chamberAttestation: Stamp,
  mofaAttestation: GlobeHemisphereWest,
  mediaLicense: Megaphone,
  municipalLicense: City,
  wasteContract: Recycle,
  safetyLicense: ShieldCheck,
  sfdaLicense: FirstAid,
  trafficAppointment: Car,
  najizAppointment: Gavel,
  socialInsuranceReg: SealCheck,
  noorRegistration: Student,
  citizenAccount: Wallet,
  vatFiling: Receipt,
};

export function getOfferingIcon(key: string): PhosphorIcon {
  return GOV_OFFERING_ICONS[key] || IdentificationCard;
}
