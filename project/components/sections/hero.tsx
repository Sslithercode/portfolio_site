"use client";

import { Mail, Terminal, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/lib/data/personal";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/80 z-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold tracking-tight mb-4">
            {personal.name}
          </h1>
          <h2 className="text-4xl font-bold tracking-tight">
            I Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              ML Algorithms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {personal.status} | {personal.title}
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" asChild>
              <a href={`mailto:${personal.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">
                <Terminal className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href={personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}