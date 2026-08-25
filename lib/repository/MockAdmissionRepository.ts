import type { Admission, Department, University } from "@/lib/types";
import {
  MOCK_ADMISSIONS,
  MOCK_DEPARTMENTS,
  MOCK_UNIVERSITIES,
} from "@/lib/data/mock";
import type { AdmissionRepository } from "./AdmissionRepository";

/**
 * mock 데이터 기반 구현체. 외부 API/크롤러/네트워크를 사용하지 않는다.
 * Promise 를 반환해 향후 비동기 실제 구현체와 동일한 사용 방식을 유지한다.
 */
export class MockAdmissionRepository implements AdmissionRepository {
  async getUniversities(): Promise<University[]> {
    return MOCK_UNIVERSITIES;
  }

  async getDepartments(universityId?: string): Promise<Department[]> {
    if (!universityId) return MOCK_DEPARTMENTS;
    return MOCK_DEPARTMENTS.filter((d) => d.universityId === universityId);
  }

  async getAdmissions(params?: {
    academicYear?: number;
    universityId?: string;
    departmentId?: string;
    type?: Admission["type"];
  }): Promise<Admission[]> {
    return MOCK_ADMISSIONS.filter((a) => {
      if (params?.academicYear && a.academicYear !== params.academicYear) return false;
      if (params?.universityId && a.universityId !== params.universityId) return false;
      if (params?.departmentId && a.departmentId !== params.departmentId) return false;
      if (params?.type && a.type !== params.type) return false;
      return true;
    });
  }
}

export const admissionRepository: AdmissionRepository = new MockAdmissionRepository();
