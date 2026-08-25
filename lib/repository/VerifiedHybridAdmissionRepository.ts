import type { Admission, Department, University } from "@/lib/types";
import { MOCK_ADMISSIONS, MOCK_DEPARTMENTS, MOCK_UNIVERSITIES } from "@/lib/data/mock";
import { verified2027Admissions } from "@/lib/admission/verified2027";
import type { AdmissionRepository } from "./AdmissionRepository";

const ID_MAP: Record<string, { universityId: string; departmentId: string; admissionId: string }> = {
  "konkuk-ku-self-recommend-2027": { universityId: "u-kku", departmentId: "d-kku-ce", admissionId: "a-kku-self-verified" },
  "konkuk-ku-region-balance-2027": { universityId: "u-kku", departmentId: "d-kku-ce", admissionId: "a-kku-region-verified" },
};

const verified: Admission[] = verified2027Admissions.map((a) => {
  const m = ID_MAP[a.id];
  return {
    id: m.admissionId,
    universityId: m.universityId,
    departmentId: m.departmentId,
    academicYear: a.academicYear,
    name: a.name,
    type: a.type,
    studentRecordWeight: a.studentRecordWeight,
    interview: a.interview,
    csatMinimum: a.csatMinimum ? { enabled: a.csatMinimum.enabled, description: a.csatMinimum.description } : undefined,
    source: a.source ? { type: a.source.type, url: a.source.url, document: a.source.document, page: a.source.page, collectedAt: a.source.collectedAt, verifiedAt: a.source.verifiedAt, confidence: a.source.confidence } : undefined,
  };
});

const mergedAdmissions: Admission[] = [
  ...MOCK_ADMISSIONS.filter((mock) => !verified.some((real) => real.universityId === mock.universityId && real.departmentId === mock.departmentId)),
  ...verified,
];

export class VerifiedHybridAdmissionRepository implements AdmissionRepository {
  async getUniversities(): Promise<University[]> { return MOCK_UNIVERSITIES; }
  async getDepartments(universityId?: string): Promise<Department[]> {
    return universityId ? MOCK_DEPARTMENTS.filter((d) => d.universityId === universityId) : MOCK_DEPARTMENTS;
  }
  async getAdmissions(params?: { academicYear?: number; universityId?: string; departmentId?: string; type?: Admission["type"] }): Promise<Admission[]> {
    return mergedAdmissions.filter((a) => {
      if (params?.academicYear && a.academicYear !== params.academicYear) return false;
      if (params?.universityId && a.universityId !== params.universityId) return false;
      if (params?.departmentId && a.departmentId !== params.departmentId) return false;
      if (params?.type && a.type !== params.type) return false;
      return true;
    });
  }
}

export const admissionRepository: AdmissionRepository = new VerifiedHybridAdmissionRepository();
