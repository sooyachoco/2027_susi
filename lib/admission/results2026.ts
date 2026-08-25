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
 * 2026 수시 결과 중 어디가 원문에서 모집단위별 공개값을 확인한 항목만 수록한다.
 * 숫자를 추정하거나 대학 단위 평균값을 모집단위 결과처럼 사용하지 않는다.
 */
export const verified2026Results: Verified2026Result[] = [
  { university:"고려대학교", region:"서울", admissionType:"교과", admissionName:"학교추천", department:"컴퓨터학과", recruitment:21, competitionRate:4.43, cutoff50:1.49, cutoff70:1.69, convertedScore50:88.22, convertedScore70:87.51, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"고려대학교", region:"서울", admissionType:"교과", admissionName:"학교추천", department:"수학과", recruitment:8, competitionRate:6.25, cutoff50:1.33, cutoff70:1.34, convertedScore50:88.83, convertedScore70:88.78, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"컴퓨터학부", recruitment:15, competitionRate:6.6, cutoff50:1.93, cutoff70:1.99, convertedScore50:96.45, convertedScore70:96.22, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"기계공학부", recruitment:18, competitionRate:9.3, cutoff50:2.30, cutoff70:2.39, convertedScore50:94.94, convertedScore70:94.83, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"화학공학과", recruitment:25, competitionRate:7.1, cutoff50:2.06, cutoff70:2.08, convertedScore50:95.86, convertedScore70:95.62, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"신소재공학과", recruitment:18, competitionRate:14.0, cutoff50:2.15, cutoff70:2.20, convertedScore50:95.45, convertedScore70:95.28, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"전기공학부", recruitment:23, competitionRate:9.3, cutoff50:2.29, cutoff70:2.33, convertedScore50:95.08, convertedScore70:94.92, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"소프트웨어학부", recruitment:13, competitionRate:6.9, cutoff50:1.96, cutoff70:2.09, convertedScore50:96.12, convertedScore70:95.81, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"전자정보공학부(전자공학)", recruitment:19, competitionRate:7.5, cutoff50:2.10, cutoff70:2.13, convertedScore50:95.77, convertedScore70:95.56, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"전자정보공학부(IT융합)", recruitment:20, competitionRate:7.8, cutoff50:2.14, cutoff70:2.16, convertedScore50:95.60, convertedScore70:95.41, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"AI융합학부", recruitment:7, competitionRate:8.1, cutoff50:2.23, cutoff70:2.27, convertedScore50:95.13, convertedScore70:94.89, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"수학과", recruitment:11, competitionRate:15.3, cutoff50:2.47, cutoff70:2.67, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"화학과", recruitment:14, competitionRate:19.5, cutoff50:2.63, cutoff70:2.73, convertedScore50:94.31, convertedScore70:94.24, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"의생명시스템학부", recruitment:13, competitionRate:38.6, cutoff50:2.43, cutoff70:2.60, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"숭실대학교", region:"서울", admissionType:"교과", admissionName:"학생부우수자전형", department:"자유전공학부(자연)", recruitment:27, competitionRate:10.6, cutoff50:2.19, cutoff70:2.23, convertedScore50:95.33, convertedScore70:95.13, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000143", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },

  // 국민대학교 — 2026 기회균형Ⅱ: 어디가 모집단위별 공개 결과
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"글로벌인문·지역대학", recruitment:6, competitionRate:10.33, cutoff50:2.77, cutoff70:3.18, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"사회과학대학", recruitment:6, competitionRate:13.17, cutoff50:2.90, cutoff70:3.24, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"법과대학", recruitment:3, competitionRate:12.0, cutoff50:2.87, cutoff70:2.98, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"경상대학", recruitment:3, competitionRate:13.33, cutoff50:1.50, cutoff70:2.02, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"경영대학", recruitment:8, competitionRate:9.63, cutoff50:3.22, cutoff70:4.13, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"창의공과대학", recruitment:14, competitionRate:7.43, cutoff50:3.43, cutoff70:3.61, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"소프트웨어융합대학", recruitment:4, competitionRate:10.25, cutoff50:1.40, cutoff70:1.40, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"자동차융합대학", recruitment:4, competitionRate:7.25, cutoff50:4.50, cutoff70:4.50, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"과학기술대학", recruitment:8, competitionRate:10.75, cutoff50:2.75, cutoff70:2.93, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"국민대학교", region:"서울", admissionType:"학종", admissionName:"기회균형Ⅱ전형", department:"건축대학", recruitment:1, competitionRate:13.0, cutoff50:3.04, cutoff70:3.04, source:"https://www.adiga.kr/ucp/uvt/uni/univDetailSelection.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000078", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },

  // 서울여자대학교 — 2026 교과우수자전형 주요 모집단위 경쟁률
  { university:"서울여자대학교", region:"서울", admissionType:"교과", admissionName:"교과우수자전형", department:"국어국문학과", recruitment:7, competitionRate:26.43, source:"https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000126", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"서울여자대학교", region:"서울", admissionType:"논술", admissionName:"논술우수자전형", department:"자유전공학부(인문사회)", recruitment:80, competitionRate:32.08, source:"https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000126", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"서울여자대학교", region:"서울", admissionType:"학종", admissionName:"바롬인재면접전형", department:"사회복지학과", recruitment:8, competitionRate:26.38, source:"https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000126", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"서울여자대학교", region:"서울", admissionType:"학종", admissionName:"바롬인재서류전형", department:"일어일문학과", recruitment:6, competitionRate:26.33, source:"https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000126", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"서울여자대학교", region:"서울", admissionType:"학종", admissionName:"바롬인재면접전형", department:"생명환경공학과", recruitment:6, competitionRate:25.33, source:"https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000126", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
  { university:"서울여자대학교", region:"서울", admissionType:"논술", admissionName:"논술우수자전형", department:"자유전공학부(자연)", recruitment:40, competitionRate:25.25, source:"https://www.adiga.kr/ucp/uvt/uni/univDetail.do?menuId=PCUVTINF2000&searchSyr=2026&unvCd=0000126", sourceLabel:"대입정보포털 어디가", verifiedAt:"2026-08-25" },
];
