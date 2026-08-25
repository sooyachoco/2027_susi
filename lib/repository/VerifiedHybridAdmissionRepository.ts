import type { Admission, AdmissionQuery, Department, University } from "@/lib/types";
import { METRO_ADMISSIONS, METRO_DEPARTMENTS, METRO_UNIVERSITIES } from "@/lib/admission/metro2027";
import type { AdmissionRepository } from "./AdmissionRepository";

/**
 * 2027 수도권(서울·경기·인천) 검증 카탈로그를 기본 데이터로 사용한다.
 * 모집인원/입결 등 아직 원문 검증되지 않은 수치는 데이터에 넣지 않는다.
 */
export class VerifiedHybridAdmissionRepository implements AdmissionRepository {
  async getUniversities(region?: University["region"]): Promise<University[]> {
    return region ? METRO_UNIVERSITIES.filter((u) => u.region === region) : METRO_UNIVERSITIES;
  }

  async getDepartments(universityId?: string): Promise<Department[]> {
    return universityId ? METRO_DEPARTMENTS.filter((d) => d.universityId === universityId) : METRO_DEPARTMENTS;
  }

  async getAdmissions(params?: AdmissionQuery): Promise<Admission[]> {
    return METRO_ADMISSIONS.filter((a) => {
      const university = METRO_UNIVERSITIES.find((u) => u.id === a.universityId);
      if (params?.academicYear && a.academicYear !== params.academicYear) return false;
      if (params?.region && university?.region !== params.region) return false;
      if (params?.universityId && a.universityId !== params.universityId) return false;
      if (params?.departmentId && a.departmentId !== params.departmentId) return false;
      if (params?.type && a.type !== params.type) return false;
      return true;
    });
  }
}

export const admissionRepository: AdmissionRepository = new VerifiedHybridAdmissionRepository();
