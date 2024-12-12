"use client";

import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProjectsSection() {
  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        {/* Featured Project with Video */}
        {featuredProject && (
          <div className="mb-16">
            <Card className="p-6 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe  src="https://www.youtube.com/embed/u0RF93M48Ig?si=I4hX-O10JK_lgoU6" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen></iframe>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{featuredProject.title}</h3>
                  <p className="text-muted-foreground">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}