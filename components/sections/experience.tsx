"use client";

import { Card } from "@/components/ui/card";
import { experience } from "@/lib/data/experience";
import { Badge } from "@/components/ui/badge";
// fix impl
export function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {job.description.map((point, i) => (
                  <li key={i} className="text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}