import type { Admission, Department, University } from "@/lib/types";
import { MOCK_ADMISSIONS, MOCK_DEPARTMENTS, MOCK_UNIVERSITIES } from "@/lib/data/mock";
import { verified2027Admissions } from "@/lib/admission/verified2027";
import type { AdmissionRepository } from "./AdmissionRepository";

/** 개발 단계용 Hybrid Repository: 검증된 2027 데이터를 mock보다 우선한다. */
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
    const mock = MOCK_ADMISSIONS.filter((a) => {
      if (params?.academicYear && a.academicYear !== params.academicYear) return false;
      if (params?.universityId && a.universityId !== params.universityId) return false;
      if (params?.departmentId && a.departmentId !== params.departmentId) return false;
      if (params?.type && a.type !== params.type) return false;
      return true;
    });

    const verified = verified2027Admissions.filter((a) => {
      if (params?.academicYear && a.academicYear !== params.academicYear) return false;
      if (params?.universityId && a.universityId !== params.universityId) return false;
      if (params?.departmentId && a.departmentId !== params.departmentId) return false;
      if (params?.type && a.type !== params.type) return false;
      return true;
    });

    const verifiedUniversities = new Set(verified.map((a) => a.universityId));
    const verifiedDepartments = new Set(verified.map((a) => a.departmentId));
    const fallback = mock.filter(
      (a) => !verifiedUniversities.has(a.universityId) || !verifiedDepartments.has(a.departmentId),
    );

    return [...fallback, ...verified];
  }
}

export const admissionRepository: AdmissionRepository = new MockAdmissionRepository();
