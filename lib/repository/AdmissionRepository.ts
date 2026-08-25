import type { AdmissionQuery, Admission, Department, University } from "@/lib/types";

/**
 * 공식 출처 기반 입시 데이터 접근 계층.
 * UI와 추천 엔진은 이 인터페이스에만 의존한다.
 */
export interface AdmissionRepository {
  getUniversities(region?: University["region"]): Promise<University[]>;
  getDepartments(universityId?: string): Promise<Department[]>;
  getAdmissions(params?: AdmissionQuery): Promise<Admission[]>;
}
