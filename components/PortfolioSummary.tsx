export function PortfolioSummary({
  balance,
  alert,
}: {
  balance: number;
  alert: string;
}) {
  return (
    <div className="panel balance">
      <div className="muted">현재 조합 안정성</div>
      <div className="balanceNum">{balance}</div>
      <div className="balanceText">공격성과 안정성을 적절히 섞은 편입니다.</div>
      <div className="alert">{alert}</div>
    </div>
  );
}
