import type { DataSource } from "./types";

export const ADIGA_2027_SOURCE: DataSource = {
  type: "adiga",
  url: "https://www.adiga.kr/",
  academicYear: 2027,
  confidence: 0.9,
};

export const VERIFIED_2027_COLLECTION_PLAN = {
  targetRegions: ["서울", "경기", "인천"] as const,
  sourcePriority: ["university", "adiga", "kcue", "other"] as const,
  requiredFields: [
    "university",
    "department",
    "admissionType",
    "academicYear",
    "selectionMethod",
    "csatMinimum",
    "recruitmentCount",
    "source",
  ] as const,
};
