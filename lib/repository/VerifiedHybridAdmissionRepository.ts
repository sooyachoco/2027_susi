import type { Admission, AdmissionQuery, Department, University } from "@/lib/types";
import { MOCK_ADMISSIONS, MOCK_DEPARTMENTS, MOCK_UNIVERSITIES } from "@/lib/data/mock";
import { METRO_ADMISSIONS, METRO_DEPARTMENTS, METRO_UNIVERSITIES } from "@/lib/admission/metro2027";
import type { AdmissionRepository } from "./AdmissionRepository";

const verifiedAdmissions = METRO_ADMISSIONS.filter((a) => a.isMock === false);
const verifiedUniversityIds = new Set(METRO_UNIVERSITIES.map((u) => u.id));
const verifiedDepartmentIds = new Set(METRO_DEPARTMENTS.map((d) => d.id));

const universities: University[] = [
  ...METRO_UNIVERSITIES,
  ...MOCK_UNIVERSITIES.filter((u) => !verifiedUniversityIds.has(u.id)),
];

const departments: Department[] = [
  ...METRO_DEPARTMENTS,
  ...MOCK_DEPARTMENTS.filter((d) => !verifiedDepartmentIds.has(d.id)),
];

const mergedAdmissions: Admission[] = [
  ...verifiedAdmissions,
  ...MOCK_ADMISSIONS.filter(
    (mock) => !verifiedAdmissions.some(
      (real) => real.universityId === mock.universityId && real.departmentId === mock.departmentId,
    ),
  ),
];

export class VerifiedHybridAdmissionRepository implements AdmissionRepository {
  async getUniversities(region?: University["region"]): Promise<University[]> {
    return region ? universities.filter((u) => u.region === region) : universities;
  }

  async getDepartments(universityId?: string): Promise<Department[]> {
    return universityId ? departments.filter((d) => d.universityId === universityId) : departments;
  }

  async getAdmissions(params?: AdmissionQuery): Promise<Admission[]> {
    return mergedAdmissions.filter((a) => {
      const university = universities.find((u) => u.id === a.universityId);
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
