"use client";

import { useEffect, useMemo, useState } from "react";
import type { Admission, Department, StudentProfile, University } from "@/lib/types";
import { admissionRepository } from "@/lib/repository/VerifiedHybridAdmissionRepository";
import { DEFAULT_STUDENT_PROFILE } from "@/lib/data/mock";
import { calcCompetitiveness, isProfileComplete } from "@/lib/scoring/competitiveness";
import { nextShuffleOffset, recommendSix } from "@/lib/scoring/recommendVerified";
import { aiSummaryText, balanceAlertText, calcBalance, strategyCommentText } from "@/lib/scoring/portfolio";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScorePanel } from "@/components/ScorePanel";
import { StudentProfileTemplateForm } from "@/components/StudentProfileTemplateForm";
import { CompetitivenessCard } from "@/components/CompetitivenessCard";
import { UniversityCard } from "@/components/UniversityCard";
import { PortfolioSummary } from "@/components/PortfolioSummary";
import { StrategyComment } from "@/components/StrategyComment";

export default function Page() {
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_STUDENT_PROFILE);
  const [universities, setUniversities] = useState<University[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [offset, setOffset] = useState(0);
  const [analysisStarted, setAnalysisStarted] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      const [u, d, a] = await Promise.all([
        admissionRepository.getUniversities(),
        admissionRepository.getDepartments(),
        admissionRepository.getAdmissions({ academicYear: 2027 }),
      ]);
      if (!alive) return;
      setUniversities(u); setDepartments(d); setAdmissions(a);
    })();
    return () => { alive = false; };
  }, []);

  const complete = isProfileComplete(profile);
  const competitiveness = useMemo(() => calcCompetitiveness(profile), [profile]);
  const recommendations = useMemo(() => complete && analysisStarted ? recommendSix(profile, admissions, offset) : [], [profile, admissions, offset, complete, analysisStarted]);
  const uniById = useMemo(() => new Map(universities.map((u) => [u.id, u])), [universities]);
  const deptById = useMemo(() => new Map(departments.map((d) => [d.id, d])), [departments]);
  const admissionById = useMemo(() => new Map(admissions.map((a) => [a.id, a])), [admissions]);
  const balance = calcBalance(competitiveness.total);
  const aiSummary = complete ? aiSummaryText(competitiveness, profile.desiredMajor) : "성적과 희망 전공을 입력하면 나에게 맞는 수도권 수시 전략을 분석해드려요.";
  const strategyComment = complete ? strategyCommentText(competitiveness) : "먼저 나의 정보를 입력해주세요. 입력이 끝나면 서울·경기·인천 2027 수시 데이터를 기준으로 분석합니다.";
  const handleChange = (patch: Partial<StudentProfile>) => { setAnalysisStarted(false); setProfile((prev) => ({ ...prev, ...patch })); };
  const startAnalysis = () => { if (!complete) return; setAnalysisStarted(true); document.getElementById("results")?.scrollIntoView({ behavior: "smooth" }); };

  function resolveNames(admissionId: string) {
    const admission = admissionById.get(admissionId);
    const university = admission ? uniById.get(admission.universityId) : undefined;
    const department = admission ? deptById.get(admission.departmentId) : undefined;
    return { universityName: university?.name ?? "대학", departmentName: department?.name ?? "학과" };
  }

  return <div className="app"><Header /><main>
    <section className="hero"><Hero onStart={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })} /><ScorePanel total={complete ? competitiveness.total : 0} aiSummary={aiSummary} /></section>
    <section className="section" id="profile"><div className="sectionHead"><div><h2>나의 수시 정보</h2><div className="muted">처음에는 비워져 있습니다. 직접 입력해주세요.</div></div></div><StudentProfileTemplateForm profile={profile} onChange={handleChange} /><div style={{marginTop:14,display:"flex",justifyContent:"flex-end"}}><button className="primary" onClick={startAnalysis} disabled={!complete} style={{opacity:complete?1:.45,cursor:complete?"pointer":"not-allowed"}}>내 수시 6장 분석하기 →</button></div>{!complete && <div className="alert" style={{marginTop:12}}>💡 모든 항목을 입력하면 분석 버튼이 활성화됩니다.</div>}</section>
    {complete && analysisStarted && <><section className="section"><div className="grid"><CompetitivenessCard label="교과 경쟁력" value={competitiveness.subject} /><CompetitivenessCard label="학종 경쟁력" value={competitiveness.holistic} /><CompetitivenessCard label="수능최저 가능성" value={competitiveness.csatMinimum} /></div></section>
    <section className="section" id="results"><div className="sectionHead"><div><h2>🎯 나의 수시 6장</h2><div className="muted">서울 · 경기 · 인천 / 2027 데이터 기준</div></div><button className="secondary" onClick={() => setOffset((o) => nextShuffleOffset(o))}>조합 다시 짜기</button></div><div className="six">{recommendations.map((rec) => { const { universityName, departmentName } = resolveNames(rec.admissionId); const admission = admissionById.get(rec.admissionId); return <UniversityCard key={rec.admissionId} tier={rec.tier} universityName={universityName} departmentName={departmentName} score={rec.score} reason={`${rec.reason}${admission?.source?.type === "adiga" ? " · 2027 어디가 확인 데이터" : " · 프로토타입 데이터"}`} onShowReason={() => alert(`${universityName} ${departmentName}\n\n${rec.reason}`)} onCompare={() => alert("비교 기능 준비중")} />; })}</div></section>
    <section className="section"><div className="sectionHead"><div><h2>포트폴리오 안정성</h2><div className="muted">현재 입력값을 종합한 전략 지표</div></div></div><div className="portfolio"><PortfolioSummary balance={balance} alert={balanceAlertText()} /><StrategyComment comment={strategyComment} /></div></section></>}
    {!complete && <section className="section"><div className="panel balance"><div className="muted">분석 준비</div><h3>수도권 수시 6장을 맞춤 설계해볼까요?</h3><div className="balanceText">내신, 모의고사, 학생부 전공연계, 수능최저 가능성을 입력하면 서울·경기·인천의 2027 전형 데이터와 연결해 상향·적정·안정 조합을 만들어줍니다.</div></div></section>}
    <div className="footer">수시6 v0.3 · 사용자 입력형 템플릿 · 서울·경기·인천 2027 전략 · 실제 합격을 보장하지 않습니다.</div>
  </main></div>;
}
