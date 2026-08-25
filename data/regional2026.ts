// Verified 2026 admission-result seed data for Seoul/Gyeonggi/Incheon.
// Source: 대입정보포털 어디가 2027 대학별 전형평가기준 및 전년도 결과공개.
// Only values explicitly verified from source pages are included.
export type RegionalAdmissionResult = {
  university: string;
  region: '서울' | '경기' | '인천';
  year: 2026;
  track: string;
  department: string;
  recruitment?: number;
  competitionRate?: number;
  source: string;
};

export const regional2026: RegionalAdmissionResult[] = [
  // 경기대 — verified 2027 evaluation/result page; detailed result values are added only when exposed by source.
  { university: '경기대학교', region: '경기', year: 2026, track: '학생부종합', department: '주요 모집단위', source: 'https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000058' },
  // 아주대 — verified 2027 evaluation/result page.
  { university: '아주대학교', region: '경기', year: 2026, track: '학생부종합', department: 'ACE전형', source: 'https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000146' },
  { university: '아주대학교', region: '경기', year: 2026, track: '학생부교과', department: '고교추천전형', source: 'https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000146' },
  // 인하대 — verified 2027 evaluation/result page.
  { university: '인하대학교', region: '인천', year: 2026, track: '학생부종합', department: '인하미래인재(면접형)', source: 'https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000169' },
  { university: '인하대학교', region: '인천', year: 2026, track: '학생부종합', department: '인하미래인재(서류형)', source: 'https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000169' },
  { university: '인하대학교', region: '인천', year: 2026, track: '학생부교과', department: '지역균형', source: 'https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2027&unvCd=0000169' },
];
