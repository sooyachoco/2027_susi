import type { Admission, StudentProfile } from "@/lib/types";
import { convertStudentToAdmissionScore, csatFit } from "@/lib/scoring/conversion";
import { VERIFIED_RESULTS_2026 } from "@/lib/admission/verifiedResults";

export type RiskBand = "상향" | "적정" | "안정";

export type AdmissionRisk = {
  band: RiskBand;
  score: number;
  confidence: number;
  reasons: string[];
};

export function assessAdmissionRisk(student: StudentProfile, admission: Admission): AdmissionRisk {
  const converted = convertStudentToAdmissionScore(student, admission);
  const minimumFit = csatFit(student, admission);
  const historical = VERIFIED_RESULTS_2026.find(
    (result) => result.universityId === admission.universityId && result.admissionId === admission.id
  );

  let score = converted.score * 0.75 + minimumFit * 0.25;
  const reasons: string[] = [converted.basis];

  if (admission.csatMinimum?.enabled) {
    reasons.push(`수능최저 충족 가능성 ${minimumFit.toFixed(0)}점 반영`);
  } else {
    reasons.push("수능최저 미적용 전형");
  }

  if (historical?.status === "verified") {
    reasons.push("2026 입시결과 수치가 검증된 전형");
  } else if (historical?.status === "source-linked") {
    reasons.push("2026 입시결과 원문 연결됨 · 수치는 추가 검증 필요");
  }

  // Until historical numeric cutoffs are verified, classify only as a strategy
  // simulation. This prevents fabricated historical data from driving a false
  // admission probability.
  const band: RiskBand = score >= 82 ? "안정" : score >= 70 ? "적정" : "상향";
  const confidence = Math.min(converted.confidence, historical?.status === "verified" ? 0.9 : 0.55);

  return {
    band,
    score: Math.round(score * 10) / 10,
    confidence,
    reasons,
  };
}
