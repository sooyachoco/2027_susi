export function CompetitivenessCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="panel stat">
      <div className="muted">{label}</div>
      <strong>{value}</strong>
      <div className="bar">
        <i style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
