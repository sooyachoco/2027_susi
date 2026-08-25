import type { Competitiveness, StudentProfile } from "@/lib/types";

const MIN = 45;
const MAX = 98;

export function clamp(value: number, min = MIN, max = MAX): number {
  return Math.max(min, Math.min(max, value));
}

export function gradeToScore(gradeAverage: number): number {
  return clamp(100 - (gradeAverage - 1) * 10.5);
}

export function mockToScore(mockAverage: number): number {
  return clamp(100 - (mockAverage - 1) * 9);
}

function levelToScore(level: number): number {
  return (level / 5) * 100;
}

export function isProfileComplete(student: StudentProfile): boolean {
  return (
    student.gradeAverage !== null &&
    student.track !== null &&
    student.desiredMajor.trim().length > 0 &&
    student.mockAverage !== null &&
    student.studentRecordLink !== null &&
    student.csatMinimumChance !== null
  );
}

export function calcCompetitiveness(student: StudentProfile): Competitiveness {
  if (!isProfileComplete(student)) {
    return { subject: 0, holistic: 0, csatMinimum: 0, total: 0 };
  }

  const gradeScore = gradeToScore(student.gradeAverage!);
  const mockScore = mockToScore(student.mockAverage!);
  const studentRecordLinkScore = levelToScore(student.studentRecordLink!);
  const csatMinimumChanceScore = levelToScore(student.csatMinimumChance!);

  const subject = Math.round(gradeScore);
  const holistic = Math.round(gradeScore * 0.45 + studentRecordLinkScore * 0.55);
  const csatMinimum = Math.round(mockScore * 0.7 + csatMinimumChanceScore * 0.3);
  const total = Math.round(subject * 0.3 + holistic * 0.45 + csatMinimum * 0.25);

  return { subject, holistic, csatMinimum, total };
}
