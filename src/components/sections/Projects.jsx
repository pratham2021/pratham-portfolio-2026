import React from "react";

export const Projects = () => {
  const palendarSkills = ["Figma", "Firebase", "Swift", "UIKit"];

  const sproutSkills = [
    "Figma",
    "Firebase",
    "Git",
    "Swift",
    "SwiftUI",
    "SwiftData",
    "Trefle",
  ];

  const nutriLifeSkills = ["Firebase", "OpenAI API", "MaterialUI", "React"];

  const aiAtUCIWebsiteSkills = ["Next", "Tailwind CSS", "MailChimp API"];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2"> Palendar </h3>
            <p className="text-gray-400 mb-4">
              Built an iOS app that enables users to make plans with friends
              based on their availabiltiy and interests with an interface to
              view user availability up to 7 days in advance, categorized by
              time of day and utilizes Firebase for cloud storage and
              authentication Designed app icon and app store screenshots using
              Figma.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {palendarSkills.map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
            <h3 className="text-xl font-bold mb-2"> Sprout </h3>
            <p className="text-gray-400 mb-4">
              Built an iOS plant encyclopedia app that fetches plany data from
              an open source REST API with a detail view where users can learn
              more about the specifics of different plans and save those plants
              Utilizes Firebase for authentication, SwiftUI as the UI framework,
              SwiftData for local on-device storage, Trefle for the REST API
              Designed app icon for light and dark mode user interface
              appearances and app store screenshots with Figma
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {sproutSkills.map((skill, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
