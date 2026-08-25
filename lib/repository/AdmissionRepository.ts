import type { Admission, Department, University } from "@/lib/types";

/**
 * 입시 데이터 접근 계층.
 * 컴포넌트/계산 로직은 이 인터페이스에만 의존하고, 실제 데이터 소스는 구현체에서 결정한다.
 * 현재는 MockAdmissionRepository 만 존재하며, 향후 공식 모집요강/입학처 기반 구현으로 교체한다.
 */
export interface AdmissionRepository {
  getUniversities(): Promise<University[]>;
  getDepartments(universityId?: string): Promise<Department[]>;
  getAdmissions(params?: {
    academicYear?: number;
    universityId?: string;
    departmentId?: string;
    type?: Admission["type"];
  }): Promise<Admission[]>;
}
