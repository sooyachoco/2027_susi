import type { Admission } from "./types";
import { admissionSources } from "./sources";

/**
 * 공개된 2027학년도 자료에서 확인한 최소 단위의 검증 데이터.
 * 모집단위 전체를 대표하는 값으로 확대 해석하지 않는다.
 * 상세 수치가 확인되지 않은 필드는 비워두고 모집요강 검증 대상으로 남긴다.
 */
export const verified2027Admissions: Admission[] = [
  {
    id: "konkuk-ku-self-recommend-2027",
    universityId: "konkuk",
    departmentId: "konkuk-cs",
    academicYear: 2027,
    name: "KU 자기추천",
    type: "학종",
    documentWeight: 70,
    interview: true,
    csatMinimum: { enabled: false },
    source: admissionSources.konkuk2027,
    isMock: false,
  },
  {
    id: "konkuk-ku-region-balance-2027",
    universityId: "konkuk",
    departmentId: "konkuk-cs",
    academicYear: 2027,
    name: "KU 지역균형",
    type: "교과",
    studentRecordWeight: 70,
    csatMinimum: { enabled: false },
    source: admissionSources.konkuk2027,
    isMock: false,
  },
];

/**
 * 서울시립대는 2027 모집요강/대학정보 페이지가 확인된 상태지만,
 * 이 파일에서는 모집단위별 세부 전형 수치를 임의로 채우지 않는다.
 */
export const verified2027Sources = [admissionSources.uos2027];
