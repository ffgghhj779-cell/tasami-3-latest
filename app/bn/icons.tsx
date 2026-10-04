import {
  AirplaneTakeoff,
  AirplaneTilt,
  ArrowsLeftRight,
  Briefcase,
  Buildings,
  HouseLine,
  IdentificationCard,
  ShieldCheck,
  Storefront,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export const BN_SERVICE_ICONS: Record<string, Icon> = {
  "iqama-renewal": IdentificationCard,
  "transfer-services": ArrowsLeftRight,
  "exit-reentry": AirplaneTilt,
  "final-exit": AirplaneTakeoff,
  "company-setup": Buildings,
  "commercial-registration": Storefront,
  musaned: HouseLine,
  "pro-services": ShieldCheck,
  "work-permit": Briefcase,
  muqeem: UsersThree,
};
