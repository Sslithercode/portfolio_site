"use client";

import { personal } from "@/lib/data/personal";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">{personal.name}</h3>
              <p className="text-muted-foreground">
                {personal.title} | {personal.location}
              </p>
            </div>
            <p className="text-lg text-muted-foreground">{personal.bio}</p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}