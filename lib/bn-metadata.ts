import type { Metadata } from "next";
import { buildLandingMetadata, type LandingMetadataInput } from "@/lib/landing-metadata";

export function buildBnMetadata(input: LandingMetadataInput): Metadata {
  return buildLandingMetadata("bn", "bn_BD", input);
}
