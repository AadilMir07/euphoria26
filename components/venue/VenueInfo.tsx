import {
  CalendarDays,
  Clock3,
  UtensilsCrossed,
  Car,
  Shirt,
  Ticket,
} from "lucide-react";

const details = [
  {
    icon: CalendarDays,
    title: "Date",
    value: "5 September 2026",
  },
  {
    icon: Clock3,
    title: "Time",
    value: "7:00 PM Onwards",
  },
  {
    icon: UtensilsCrossed,
    title: "Dinner",
    value: "Unlimited Buffet",
  },
  {
    icon: Car,
    title: "Parking",
    value: "Available",
  },
  {
    icon: Shirt,
    title: "Dress Code",
    value: "Classy • Bold • You",
  },
  {
    icon: Ticket,
    title: "Pass",
    value: "₹899 Only",
    highlight: true,
  },
];

export default function VenueInfo() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">

      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-700/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-violet-300 sm:text-[10px]">
              Before You Arrive
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Know Before
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                {" "}You Go.
              </span>
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-500">
            Everything you need to know before stepping into EUPHORIA '26.
          </p>

        </div>


        {/* Details */}
        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] sm:grid-cols-3 lg:grid-cols-6">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group relative border-white/[0.08] p-5 transition duration-300 hover:bg-violet-500/[0.05] sm:p-6
                  ${index !== 1 ? "border-r" : ""}
                  ${index >= 2 ? "border-t sm:border-t-0" : ""}
                  ${index === 2 ? "sm:border-l" : ""}
                  ${item.highlight ? "bg-violet-500/[0.06]" : ""}
                `}
              >

                {/* Number */}
                <span className="absolute right-4 top-4 text-[8px] tracking-[0.25em] text-zinc-700">
                  0{index + 1}
                </span>


                {/* Icon */}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 group-hover:scale-110 ${
                    item.highlight
                      ? "bg-violet-600 text-white"
                      : "bg-violet-500/10 text-violet-300"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>


                {/* Text */}
                <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
                  {item.title}
                </p>

                <p
                  className={`mt-2 text-sm font-semibold leading-5 ${
                    item.highlight
                      ? "text-violet-300"
                      : "text-white"
                  }`}
                >
                  {item.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}