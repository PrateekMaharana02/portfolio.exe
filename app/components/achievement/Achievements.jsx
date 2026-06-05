"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaMedal, FaAward, FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const achievements = [
  /*{
    id: 1,
    icon: <FaTrophy className="text-yellow-500" size={24} />,
    title: "Odoo Hackathon 2025",
    description: "Ranked Top 350 in Round 1 and Top 10 in the Final Round at Odoo Hackathon 2025 among 19,000 participants worldwide.",
    date: "June 2025",
    category: "Competition",
    link: "https://www.linkedin.com/posts/arpitkm_odoohackathon-odoohackathon2025-hackathon-activity-7363111973112217600-3_MX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVjRjYBAvJr0IMrju8aNkMgcqhJWuX71w0",
  },
  {
    id: 2,
    icon: <FaMedal className="text-green-500" size={24} />,
    title: "Open Source Contributor",
    description: "Contributed to Git Aura by designing the modern and user-friendly sign-in page, ensuring a clean UI and seamless onboarding experience.",
    date: "August 2025",
    category: "Open Source",
    link: "https://github.com/Anshkaran7/git-aura",
  },
  
  /*{
    id: 2,
    icon: <FaCertificate className="text-blue-500" size={24} />,
    title: "Full Stack Development Certification",
    description: "Completed comprehensive full-stack development course covering React, Node.js, and databases",
    date: "2024",
    category: "Certification",
    link: "#",
  },
  {
    id: 3,
    icon: <FaMedal className="text-green-500" size={24} />,
    title: "Open Source Contributor",
    description: "Active contributor to multiple open-source projects with significant community impact",
    date: "2024",
    category: "Open Source",
    link: "https://github.com/abhivarde",
  },
  {
    id: 4,
    icon: <FaAward className="text-purple-500" size={24} />,
    title: "Hackathon Winner",
    description: "First place in local hackathon for innovative web application development",
    date: "2023",
    category: "Competition",
    link: "#",
  },
  {
    id: 5,
    icon: <FaStar className="text-orange-500" size={24} />,
    title: "Technical Writing",
    description: "Published multiple technical articles on Hashnode with thousands of views",
    date: "2022-2024",
    category: "Writing",
    link: "https://abhivarde.hashnode.dev/",
  },
  {
    id: 6,
    icon: <FaCertificate className="text-red-500" size={24} />,
    title: "JavaScript Certification",
    description: "Advanced JavaScript certification demonstrating proficiency in modern ES6+ features",
    date: "2023",
    category: "Certification",
    link: "#",
  },*/
];

const categories = ["All", "Competition", "Certification", "Open Source"];

const Achievements = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-[#333] text-white hover:bg-[#444]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-[#111111] border border-[#333] rounded-2xl p-6 hover:border-[#555] transition-all duration-300"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-[#333] text-white text-xs rounded-full">
                {achievement.category}
              </span>
            </div>

            {/* Icon */}
            <div className="mb-4">
              {achievement.icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-white/50 text-sm">
                  {achievement.date}
                </span>
                
                {achievement.link !== "#" && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white/70 hover:text-white text-sm transition-colors"
                  >
                    View
                    <GoArrowUpRight
                      size={16}
                      className={`transition-all duration-200 ${
                        hoveredIndex === index && "translate-x-0.5 -translate-y-0.5"
                      }`}
                    />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-white/50 text-lg">
            Building Achievement for this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default Achievements;
