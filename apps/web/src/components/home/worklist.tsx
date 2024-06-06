"use client";

import { cn } from "ai-utilities";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Branding",
    description: "Ali Imam",
    time: "15m ago",
    icon: "",
    color: "#f43f5e",
  },
  {
    name: "Social Media",
    description: "Ali Imam",
    time: "10m ago",
    icon: "",
    color: "#d946ef",
  },
  {
    name: "UI/UX",
    description: "Ali Imam",
    time: "5m ago",
    icon: "",
    color: "#10b981",
  },
  {
    name: "3D Packaging",
    description: "Ali Imam",
    time: "2m ago",
    icon: "",
    color: "#eab308",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] transform cursor-pointer overflow-hidden rounded-xl p-3",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        // light styles
        " border border-slate-200 dark:border-slate-800",
        // dark styles
        "transform-gpu  ",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Worklist() {
  return (
    <div className="relative flex max-h-[260px] min-h-[260px] w-full max-w-[32rem] flex-col overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-900 p-3">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
