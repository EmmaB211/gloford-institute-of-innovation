import { useCountUp } from "../hooks/useCountUp";
import type { ImpactStat } from "../data/impact";

function StatItem({ stat }: { stat: ImpactStat }) {
  const { value, ref } = useCountUp(stat.value || 0);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-white sm:text-5xl">
        {stat.value > 0 ? `${value}${stat.suffix}` : `+${stat.suffix.replace("+", "")}XX`}
      </p>
      <p className="mt-2 text-sm font-medium text-white/75">{stat.label}</p>
    </div>
  );
}

export default function ImpactStats({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat) => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
