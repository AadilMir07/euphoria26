import {
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Props = {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
};

export default function StatsCards({
  total,
  pending,
  approved,
  rejected,
}: Props) {
  const cards = [
    {
      title: "Registrations",
      value: total,
      icon: Users,
      color: "text-violet-400",
      border: "hover:border-violet-500/40",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "text-amber-400",
      border: "hover:border-amber-500/40",
    },
    {
      title: "Approved",
      value: approved,
      icon: CheckCircle2,
      color: "text-emerald-400",
      border: "hover:border-emerald-500/40",
    },
    {
      title: "Rejected",
      value: rejected,
      icon: XCircle,
      color: "text-red-400",
      border: "hover:border-red-500/40",
    },
  ];

  return (
    <section className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`
              rounded-3xl
              border
              border-white/10
              bg-[#111111]
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#171717]
              ${card.border}
            `}
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-black text-white">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl bg-white/5 p-4 ${card.color}`}
              >
                <Icon size={28} />
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}