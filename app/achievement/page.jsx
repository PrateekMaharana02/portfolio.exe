import React from "react";
import Achievements from "../components/achievement/Achievements";

export const metadata = {
  title: "Achievements - Arpit Maurya",
  description: "My achievements, certifications, and accomplishments in software development and technology.",
};

export default function AchievementPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Achievements
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          A collection of my accomplishments, certifications, and milestones in my journey as a developer.
        </p>
      </div>
      <Achievements />
    </div>
  );
}
