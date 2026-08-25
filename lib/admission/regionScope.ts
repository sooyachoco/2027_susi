import type { University } from "./types";

export const ADMISSION_REGIONS = ["서울", "경기"] as const;
export type AdmissionRegion = (typeof ADMISSION_REGIONS)[number];

export function isTargetRegion(region?: string): region is AdmissionRegion {
  return region === "서울" || region === "경기";
}

export function filterTargetRegionUniversities(universities: University[]) {
  return universities.filter((university) => isTargetRegion(university.region));
}
