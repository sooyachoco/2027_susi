import type { Admission, StudentProfile } from "@/lib/admission/types";

export type ConversionResult = {
  admissionId: string;
  academicYear: number;
  score: number;
  label: "프로토타입 환산" | "공식 산식 적용";
  notes: string[];
};

export interface ConversionAdapter {
  supports(admission: Admission): boolean;
  convert(student: StudentProfile, admission: Admission): ConversionResult;
}

export function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

export function gradeScore(gradeAverage: number) {
  return clamp(100 - (gradeAverage - 1) * 10.5, 45, 98);
}

export function mockScore(mockAverage: number) {
  return clamp(100 - (mockAverage - 1) * 9, 45, 98);
}
