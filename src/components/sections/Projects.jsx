import React from "react";
import { RevealOnScroll } from '../RevealOnScroll';

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
    <section id="projects" className="py-20">
      <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
                  <h3 className="text-xl font-bold mb-2"> Palendar </h3>
                      
                  <p className="text-gray-400 mb-4">
                    Built an iOS app that enables users to make plans with friends based on their availabiltiy and interests.<br></br>
                    Has an interface to view user availability up to 7 days in advance, categorized by time of day.<br></br>
                    Utilizes Firebase for cloud storage and authentication.<br></br>
                    Designed app icon and app store screenshots using Figma.
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

                  <div className="flex justify-between items-center">
                      <a href="https://apps.apple.com/us/app/palendar/id1601066938" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project → </a>    
                  </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
                <h3 className="text-xl font-bold mb-2"> Sprout </h3>
                <p className="text-gray-400 mb-4">
                  Built an iOS plant encyclopedia app that fetches plant data from an open source REST API with a detail view where users can learn more about the specifics of different plans and save those plants.<br></br>
                  Utilizes Firebase for authentication, SwiftUI as the UI framework, SwiftData for local on-device storage, and Trefle for the REST API.<br></br>
                  Designed app icon for light and dark mode user interface appearances and app store screenshots with Figma.<br></br>
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

                <div className="flex justify-between items-center">
                  <a href="https://apps.apple.com/us/app/sprout-plant-encyclopedia/id6751605760" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project → </a>
                </div>  
              </div>

              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
                <h3 className="text-xl font-bold mb-2"> NutriLife </h3>
                <p className="text-gray-400 mb-4">
                    Developed a website application that allows the user to enter daily meal entries for breakfast, lunch, and dinner.<br></br>
                    Enables users to track meals over multiple weeks through a clean, dynamic scrollable UI.<br></br>
                    Utilizes React and Material UI for front end, Firebase for storage, and OpenAI to generate dietary suggestions.<br></br>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {nutriLifeSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a href="https://github.com/pratham2021/nutrition-tracker.git" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project → </a>
                </div>  
              </div>


              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col">
                <h3 className="text-xl font-bold mb-2"> AI @ UCI Club Website </h3>
                <p className="text-gray-400 mb-4">
                      Developed the new AI @ UCI website using Next.<br/>
                      Worked on the landing page and the contact form page.<br/>
                      Integrated the contact form page for the club mailing list using MailChimp API.<br/>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {aiAtUCIWebsiteSkills.map((skill, key) => (
                    <span key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href="https://github.com/aiclubatuci/aiclub-website" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors"> View Project → </a>
                </div>  
              </div>
            </div>
          </div>
      </RevealOnScroll>
      
    </section>
  );
};
