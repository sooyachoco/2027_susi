import type { AdmissionRegion } from "@/lib/types";

export type VerifiedResult = {
  universityId: string;
  region: AdmissionRegion;
  admissionId: string;
  academicYear: 2026;
  source: string;
  verifiedAt: string;
  status: "source-linked" | "verified";
  notes: string;
  competitionRate?: number;
  recruitment?: number;
  waitlistRate?: number;
  cutoff?: number;
};

/**
 * 2026 result records are intentionally source-linked until each numeric field
 * has been verified against the published university/ADIGA result table.
 * No inferred cutoff or competition numbers are inserted here.
 */
export const VERIFIED_RESULTS_2026: VerifiedResult[] = [
  {
    universityId: "gachon",
    region: "경기",
    admissionId: "gachon-2027-general",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준 페이지에서 2026 전형 결과 영역을 확인. 수치 필드는 원문 표 검증 후 입력."
  },
  {
    universityId: "kyunghee",
    region: "서울",
    admissionId: "kyunghee-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 대학정보에서 2026 전형 결과 영역을 확인. 수치 필드는 원문 표 검증 후 입력."
  },
  {
    universityId: "konkuk",
    region: "서울",
    admissionId: "konkuk-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 검증 전까지 비워둠."
  },
  {
    universityId: "kookmin",
    region: "서울",
    admissionId: "kookmin-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 검증 전까지 비워둠."
  },
  {
    universityId: "seoultech",
    region: "서울",
    admissionId: "seoultech-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 검증 전까지 비워둠."
  },
  {
    universityId: "kyonggi",
    region: "경기",
    admissionId: "kyonggi-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 검증 전까지 비워둠."
  },
  {
    universityId: "ajou",
    region: "경기",
    admissionId: "ajou-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 검증 전까지 비워둠."
  },
  {
    universityId: "inha",
    region: "인천",
    admissionId: "inha-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 검증 전까지 비워둠."
  },
  {
    universityId: "gachon",
    region: "경기",
    admissionId: "gachon-2027-susi",
    academicYear: 2026,
    source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027",
    verifiedAt: "2026-08-25",
    status: "source-linked",
    notes: "2027 전형평가기준과 2026 전형 결과 공개 영역을 연결. 숫자는 원문 표 확인 후 입력."
  }
];
