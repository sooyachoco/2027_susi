import type { Admission, AdmissionQuery, Department, University } from "@/lib/types";
import { METRO_ADMISSIONS, METRO_DEPARTMENTS, METRO_UNIVERSITIES } from "@/lib/admission/metro2027";
import { VERIFIED_METRO_ADMISSIONS, VERIFIED_METRO_DEPARTMENTS, VERIFIED_METRO_UNIVERSITIES } from "@/lib/admission/metroVerifiedAdditions";
import type { AdmissionRepository } from "./AdmissionRepository";

const UNIVERSITIES = [...METRO_UNIVERSITIES, ...VERIFIED_METRO_UNIVERSITIES];
const DEPARTMENTS = [...METRO_DEPARTMENTS, ...VERIFIED_METRO_DEPARTMENTS];
const ADMISSIONS = [...METRO_ADMISSIONS, ...VERIFIED_METRO_ADMISSIONS];

/**
 * 2027 수도권(서울·경기·인천) 검증 카탈로그.
 * 원문이 확인된 항목만 isMock=false로 제공한다.
 */
export class VerifiedHybridAdmissionRepository implements AdmissionRepository {
  async getUniversities(region?: University["region"]): Promise<University[]> {
    return region ? UNIVERSITIES.filter((u) => u.region === region) : UNIVERSITIES;
  }

  async getDepartments(universityId?: string): Promise<Department[]> {
    return universityId ? DEPARTMENTS.filter((d) => d.universityId === universityId) : DEPARTMENTS;
  }

  async getAdmissions(params?: AdmissionQuery): Promise<Admission[]> {
    return ADMISSIONS.filter((a) => {
      const university = UNIVERSITIES.find((u) => u.id === a.universityId);
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
