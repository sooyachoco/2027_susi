export function StrategyComment({ comment }: { comment: string }) {
  return (
    <div className="panel balance">
      <div className="muted">AI 전략 코멘트</div>
      <h3>{comment}</h3>
      <div className="reason">
        ※ 실제 지원 전에는 각 대학의 최종 모집요강과 공식 입시결과를 확인해야 합니다.
      </div>
    </div>
  );
}
