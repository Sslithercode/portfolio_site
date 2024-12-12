"use client";

import { Card } from "@/components/ui/card";
import { education } from "@/lib/data/education";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        {education.map((edu, index) => (
          <Card key={index} className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground">{edu.specialization}</p>
                <p className="text-muted-foreground">
                  {edu.university}, {edu.location}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </div>
            
            <div className="">
              <div>
             
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCourses.map((course, i) => (
                    <Badge key={i} variant="outline">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}