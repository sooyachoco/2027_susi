# 수시6 v0.1 — Cursor 개발 명세

## 목표
2027학년도 수시 지원 전략을 설계하는 모바일 우선 웹앱이다. 학생의 내신·모의고사·학생부 경쟁력·희망 전공과 대학별 전형 데이터를 바탕으로 수시 6장을 전략적으로 구성한다.

현재 `susi6_v0_1.html`은 UI/UX 프로토타입이다.

## Cursor 역할 최소화 원칙
- 기존 HTML의 시각적 방향과 UX를 최대한 유지한다.
- 현재 단계에서는 외부 API, 실제 입시 데이터, 크롤러를 연결하지 않는다.
- mock 데이터만 사용한다.
- 계산 로직과 데이터 접근 계층을 분리한다.
- 이후 실제 데이터 수집기를 연결할 수 있는 인터페이스만 만든다.
- 임의로 실제 대학 입시 데이터를 만들거나 합격률을 추정하지 않는다.
- API 키를 코드에 넣지 않는다.

## 권장 스택
- Next.js
- TypeScript
- React
- 현재 디자인을 유지하는 CSS
- 향후 Supabase/PostgreSQL
- 향후 OpenAI API

## 화면
1. Home — “그래서, 어디에 써야 할까?”
2. Student Profile — 내신/계열/전공/모의고사/학생부 전공연계/수능최저 가능성
3. Competitiveness — 교과/학종/수능최저/종합 경쟁력
4. Recommended 6 — 상향 2, 적정 3, 안정 1
5. Portfolio — 안정성 및 전략 코멘트

## 컴포넌트
```text
components/
  Header
  Hero
  ScorePanel
  StudentProfileForm
  CompetitivenessCard
  UniversityCard
  PortfolioSummary
  StrategyComment
```

## 데이터 모델
```ts
type University = {
  id: string;
  name: string;
  region?: string;
};

type Department = {
  id: string;
  universityId: string;
  name: string;
  category?: string;
};

type Admission = {
  id: string;
  universityId: string;
  departmentId: string;
  academicYear: number;
  name: string;
  type: "교과" | "학종" | "논술" | "기타";
  모집인원?: number;
  studentRecordWeight?: number;
  interview?: boolean;
  csatMinimum?: { enabled: boolean; description?: string };
  source?: {
    type: "university" | "adiga" | "kcue" | "other";
    url?: string;
    document?: string;
    page?: number;
    collectedAt?: string;
    verifiedAt?: string;
    confidence?: number;
  };
};

type StudentProfile = {
  gradeAverage: number;
  track: string;
  desiredMajor: string;
  mockAverage: number;
  studentRecordLink: number;
  csatMinimumChance: number;
};
```

## 경쟁력 계산
프로토타입 계산식을 유지하되 `lib/scoring/competitiveness.ts`로 분리한다.

```text
gradeScore = 100 - (gradeAverage - 1) * 10.5
holistic = gradeScore * .45 + studentRecordLinkScore * .55
mockScore = 100 - (mockAverage - 1) * 9
csat = mockScore * .7 + csatMinimumChanceScore * .3
total = 교과*.30 + 학종*.45 + 수능최저*.25
```

45~98 범위 제한을 유지한다. 이 점수는 현재 UX 프로토타입용이며 실제 합격예측 점수로 표현하지 않는다.

## 추천 6장
```ts
recommendSix(student, admissions)
```
으로 분리하고 다음을 반환한다.
```ts
{
  tier: "상향" | "적정" | "안정",
  admissionId: string,
  score: number,
  reason: string
}
```
초기 mock은 상향 2 / 적정 3 / 안정 1.

## Repository
```ts
interface AdmissionRepository {
  getUniversities(): Promise<University[]>;
  getDepartments(universityId?: string): Promise<Department[]>;
  getAdmissions(params?: {
    academicYear?: number;
    universityId?: string;
    departmentId?: string;
    type?: Admission["type"];
  }): Promise<Admission[]>;
}
```
초기에는 `MockAdmissionRepository`만 구현한다.

## 향후 데이터 수집
실제 2027 데이터는 다음 우선순위를 사용한다.
1. 대학 공식 모집요강
2. 대학 공식 입학처
3. 대교협/교육부
4. 대입정보포털 어디가

향후 저장해야 할 출처 정보:
`source_type`, `source_url`, `source_document`, `source_page`, `academic_year`, `collected_at`, `verified_at`, `confidence`

현재는 크롤러를 만들지 않는다.

## AI 원칙
AI는 숫자 계산을 담당하지 않는다. 전략 엔진이 공식 데이터와 규칙으로 후보군을 계산하고, AI는 결과를 설명한다. “무조건 합격”, “100% 합격” 등의 표현은 금지한다.

## 작업 순서
1. 현재 HTML 실행
2. Next.js + TypeScript 전환
3. UI 컴포넌트 분리
4. StudentProfile 상태 구현
5. 경쟁력 계산 분리
6. mock 데이터 분리
7. 추천 6장 로직 분리
8. Repository 인터페이스 추가
9. 모바일/데스크톱 검수
10. 이후 실제 데이터 수집 연결

## 완료 조건
- `npm run dev` 실행
- 모바일/desktop 정상
- 입력값 변경 시 점수 즉시 변경
- 추천 6장 표시
- mock 데이터 명확히 분리
- 추천 로직 별도 파일
- 데이터 타입 별도 파일
- Repository 인터페이스 존재
- 외부 API/크롤러/API 키 없음

## Cursor에 최초로 전달할 명령
```text
이 폴더의 susi6_v0_1.html과 DEVELOPMENT.md를 읽어라.

DEVELOPMENT.md를 우선 명세로 삼아 현재 HTML 프로토타입을 Next.js + TypeScript 웹앱으로 전환한다.

중요:
- 기존 UI/UX를 최대한 유지한다.
- 실제 입시 데이터나 외부 API는 연결하지 않는다.
- mock 데이터만 사용한다.
- 추천 계산 로직과 데이터 접근 계층을 컴포넌트에서 분리한다.
- AdmissionRepository 인터페이스를 만든다.
- 실제 크롤러는 만들지 않는다.
- API 키를 사용하지 않는다.

먼저 프로젝트 상태를 검사하고 필요한 파일 구조를 만든 뒤 구현한다.

완료 후 변경 파일 목록, 실행 방법, mock으로 남은 부분, 다음 단계를 간단히 보고한다.
```
