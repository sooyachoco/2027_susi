import { VERIFIED_RESULTS_2026, type VerifiedResult } from "./verifiedResults";

export function getVerifiedResults(universityId?: string): VerifiedResult[] {
  return universityId
    ? VERIFIED_RESULTS_2026.filter((item) => item.universityId === universityId)
    : VERIFIED_RESULTS_2026;
}

export function getResultConfidence(universityId: string, admissionId: string): number {
  const item = VERIFIED_RESULTS_2026.find(
    (result) => result.universityId === universityId && result.admissionId === admissionId
  );
  if (!item) return 0;
  return item.status === "verified" ? 0.9 : 0.55;
}
