import { useCountUp } from "../hooks/useCountUp";
import type { ImpactStat } from "../data/impact";

function StatItem({ stat }: { stat: ImpactStat }) {
  const { value, ref } = useCountUp(stat.value || 0);
  return (
    <div ref={ref} className="text-center">
      <p className="text-impact font-display font-bold text-white">
        {stat.value > 0 ? `${value}${stat.suffix}` : `+${stat.suffix.replace("+", "")}XX`}
      </p>
      <p className="mt-2 text-sm font-medium text-white/75">{stat.label}</p>
    </div>
  );
}

export default function ImpactStats({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
