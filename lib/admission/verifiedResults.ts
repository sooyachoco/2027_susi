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
 * 2026학년도 결과 레이어.
 * 숫자는 대학/어디가 원문 표에서 모집단위·전형 단위로 확인한 경우에만 verified로 승격한다.
 * 현재는 공개된 2026 결과 페이지를 연결하고, 검색/요약 숫자의 추정 입력은 금지한다.
 */
export const VERIFIED_RESULTS_2026: VerifiedResult[] = [
  { universityId: "korea", region: "서울", admissionId: "korea-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000069", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결. 모집단위별 수치는 원문 표 검증 후 승격." },
  { universityId: "ewha", region: "서울", admissionId: "ewha-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000163", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결. 모집단위별 수치는 원문 표 검증 후 승격." },
  { universityId: "ssu", region: "서울", admissionId: "ssu-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000143", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결. 숭실대 입학처에도 2026 수시 입시결과 통계 게시 사실 확인." },
  { universityId: "inha", region: "인천", admissionId: "inha-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000169", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결. 전형·모집단위별 숫자 검증 후 승격." },
  { universityId: "uos", region: "서울", admissionId: "uos-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000040", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결." },
  { universityId: "konkuk", region: "서울", admissionId: "konkuk-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000052", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결." },
  { universityId: "chungang", region: "서울", admissionId: "chungang-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결. 중앙대 모집단위별 원문 확인 후 숫자 입력." },
  { universityId: "skku", region: "서울", admissionId: "skku-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000133", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결." },
  { universityId: "gachon", region: "경기", admissionId: "gachon-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결." },
  { universityId: "kyunghee", region: "서울", admissionId: "kyunghee-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결." },
  { universityId: "ajou", region: "경기", admissionId: "ajou-2026-susi", academicYear: 2026, source: "https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027", verifiedAt: "2026-08-25", status: "source-linked", notes: "2027 대학정보의 2026학년도 전형 결과 공개 영역 연결." },
];
