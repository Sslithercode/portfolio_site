"use client";

import { useEffect, useRef } from "react";
import { timeline } from "@/lib/data/timeline";
import { Code, Brain, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  Code,
  Brain,
  Rocket,
} as const;

export function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={timelineRef}
      className="relative w-full overflow-hidden py-8 px-4"
    >
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2" />

      {/* Timeline Items */}
      <div className="relative max-w-2xl mx-auto">
        {timeline.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <div
              key={item.year}
              className={cn(
                "timeline-item opacity-0 transition-all duration-700 ease-out",
                index % 2 === 0 ? "translate-x-12" : "-translate-x-12",
                "md:translate-x-0",
                "mb-12 last:mb-0"
              )}
            >
              <div
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={cn(
                      "bg-card p-6 rounded-lg shadow-lg",
                      "transform transition-transform duration-300 hover:scale-105"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Age {item.age} ({item.year})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {item.milestones && (
                      <ul className="mt-2 text-sm text-muted-foreground">
                        {item.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary" />
                            {milestone}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}