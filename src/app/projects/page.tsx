"use client";

import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const projects = [
  {
    title: "Diamond Price Prediction",
    description:
      "ML model achieving 92% accuracy using advanced feature engineering and hyperparameter optimization for diamond price forecasting.",
    image: "/images/projects/variationalCalculus.gif",
    github: "https://github.com/deepashricharpe2001",
    demo: "https://github.com/deepashricharpe2001",
    tags: ["Python", "Scikit-learn", "Pandas", "Flask", "Docker", "AWS"],
  },
  {
    title: "Movie Recommendation System",
    description:
      "Collaborative filtering recommendation engine using machine learning algorithms to suggest personalized movie recommendations.",
    image: "/images/projects/chatApp.gif",
    github: "https://github.com/deepashricharpe2001",
    demo: "https://github.com/deepashricharpe2001",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Swiggy Data Analysis",
    description:
      "Comprehensive data analysis of Swiggy's restaurant and delivery data to uncover insights and patterns using Python visualization libraries.",
    image: "/images/projects/ecommerce.gif",
    github: "https://github.com/deepashricharpe2001",
    demo: "https://github.com/deepashricharpe2001",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
  },
  {
    title: "Electric Vehicle Analysis",
    description:
      "Analyzed 50,000+ data points of electric vehicle datasets to identify trends, patterns, and market insights.",
    image: "/images/projects/vehicleTheftDetector.gif",
    github: "https://github.com/deepashricharpe2001",
    demo: "https://github.com/deepashricharpe2001",
    tags: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
  },
  {
    title: "AMCAT Data Analysis",
    description:
      "Statistical analysis and visualization of AMCAT assessment data comprising 50,000+ records to derive meaningful insights.",
    image: "/images/projects/bankDBMS.gif",
    github: "https://github.com/deepashricharpe2001",
    demo: "https://github.com/deepashricharpe2001",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "MLOps Pipeline Automation",
    description:
      "Automated ML deployment pipeline using Docker and GitHub Actions, reducing deployment time by 30%.",
    image: "/images/projects/railNetOptimizer.gif",
    github: "https://github.com/deepashricharpe2001",
    demo: "https://github.com/deepashricharpe2001",
    tags: ["Docker", "GitHub Actions", "AWS", "CI/CD", "MLOps"],
  },
];

export default function Projects() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className="backdrop-blur-lg bg-gradient-to-br from-black/50 to-black/30 
          rounded-3xl border border-white/10 p-6 sm:p-8 mb-8 sm:mb-12
          animate-in slide-in-from-bottom hover:border-white/20 
          transition-all duration-500 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h1 className="relative text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
            My Projects
          </h1>
          <p className="relative text-white/60 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base">
            A collection of my work spanning web/app development, machine
            learning, and hardware projects. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group/card relative backdrop-blur-lg bg-gradient-to-br from-black/50 to-black/30 
                rounded-3xl border border-white/10 overflow-hidden hover:scale-[1.02] 
                transition-all duration-500 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 200}ms` }}>
              <div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent 
                opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
              />

              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="relative p-4 sm:p-6">
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r 
                  from-white to-white/70 group-hover/card:to-white transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 mb-3 sm:mb-4 group-hover/card:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm
                        group-hover/card:bg-white/10 group-hover/card:border-white/20 
                        transition-all duration-300 hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1.5 sm:gap-2 hover:text-white/90 transition-all duration-300
                      group/link relative text-sm sm:text-base">
                    <div
                      className="absolute inset-0 bg-white/0 group-hover/link:bg-white/5 
                      rounded-lg transition-colors duration-300"
                    />
                    <SiGithub size={16} className="sm:w-5 sm:h-5" />
                    <span className="relative">Code</span>
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-1.5 sm:gap-2 hover:text-white/90 transition-all duration-300
                      group/link relative text-sm sm:text-base">
                    <div
                      className="absolute inset-0 bg-white/0 group-hover/link:bg-white/5 
                      rounded-lg transition-colors duration-300"
                    />
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    <span className="relative">Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
