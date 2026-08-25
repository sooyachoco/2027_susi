export type Verified2026Result = {
  university: string;
  region: "서울" | "경기" | "인천";
  admissionType: "교과" | "학종" | "논술" | "기타";
  admissionName: string;
  department: string;
  recruitment: number;
  competitionRate: number;
  cutoff50?: number;
  cutoff70?: number;
  convertedScore50?: number;
  convertedScore70?: number;
  source: string;
  sourceLabel: "대입정보포털 어디가";
  verifiedAt: string;
};

/**
 * 2026 수시 결과 중 원문 공개값을 확인한 모집단위만 수록한다.
 * 숫자를 추정하거나 대학 단위 평균값을 모집단위 결과처럼 사용하지 않는다.
 */
export const verified2026Results: Verified2026Result[] = [
  {
    university: "고려대학교",
    region: "서울",
    admissionType: "교과",
    admissionName: "학교추천",
    department: "컴퓨터학과",
    recruitment: 21,
    competitionRate: 4.43,
    cutoff50: 1.49,
    cutoff70: 1.69,
    convertedScore50: 88.22,
    convertedScore70: 87.51,
    source: "https://k-unirank.com/admissions/university/47/?phase=SUSI&year=2026",
    sourceLabel: "대입정보포털 어디가",
    verifiedAt: "2026-08-25",
  },
  {
    university: "고려대학교",
    region: "서울",
    admissionType: "교과",
    admissionName: "학교추천",
    department: "수학과",
    recruitment: 8,
    competitionRate: 6.25,
    cutoff50: 1.33,
    cutoff70: 1.34,
    convertedScore50: 88.83,
    convertedScore70: 88.78,
    source: "https://k-unirank.com/admissions/university/47/?phase=SUSI&year=2026",
    sourceLabel: "대입정보포털 어디가",
    verifiedAt: "2026-08-25",
  },
  {
    university: "숭실대학교",
    region: "서울",
    admissionType: "교과",
    admissionName: "학생부우수자전형",
    department: "컴퓨터학부",
    recruitment: 15,
    competitionRate: 4.07,
    cutoff50: 1.98,
    cutoff70: 2.05,
    convertedScore50: 96.43,
    convertedScore70: 96.03,
    source: "https://k-unirank.com/admissions/university/208/?phase=SUSI&year=2026",
    sourceLabel: "대입정보포털 어디가",
    verifiedAt: "2026-08-25",
  },
  {
    university: "숭실대학교",
    region: "서울",
    admissionType: "교과",
    admissionName: "학생부우수자전형",
    department: "기계공학부",
    recruitment: 18,
    competitionRate: 12.56,
    cutoff50: 2.16,
    cutoff70: 2.19,
    convertedScore50: 95.55,
    convertedScore70: 95.41,
    source: "https://k-unirank.com/admissions/university/208/?phase=SUSI&year=2026",
    sourceLabel: "대입정보포털 어디가",
    verifiedAt: "2026-08-25",
  },
];
