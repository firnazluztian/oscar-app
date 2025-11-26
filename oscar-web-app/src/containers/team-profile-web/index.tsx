"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { ProjectGoals } from "./ProjectGoals";
import { TeamMembers } from "./TeamMembers";
import { TryItOut } from "./TryItOut";

export default function TeamProfilePage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("hero");
  const isNavigatingRef = useRef(false);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      isNavigatingRef.current = true;
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 1000);
    }
  };

  const handleFeatureClick = (type: string) => {
    switch (type) {
      case "student":
        router.push("/student");
        break;
      case "teacher":
        router.push("/teacher");
        break;
      case "admin":
        router.push("/admin");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) {
        return;
      }

      const sections = ["hero", "goals", "team", "try-it-out"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      <Hero onNavigate={handleNavigation} />
      <ProjectGoals />
      <TeamMembers />
      <TryItOut onFeatureClick={handleFeatureClick} />
    </div>
  );
}
