import React from 'react'

export const About = () => {
  const pythonSkills = ["ICS 31: Introduction to Python Progamming (Fall 2024)", "ICS 32: Python Programming with Software Libraries (Winter 2025)", "ICS 33: Intermediate Python Programming (Spring 2025)"];

  const otherProgrammingSkills = ["ICS 45C: Introduction to C/C++ (Fall 2025)", "ICS 46: Data Structures and Algorithms (Winter 2026)"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Second year computer science student with experience in Python and C++ 
                    and experience building two iOS apps from scratch.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Python</h3>
                        <div className="flex flex-wrap gap-2">
                          {pythonSkills.map((skill, id) => (
                              <span key={id} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {skill}
                              </span> 
                          ))}
                        </div>
                    </div>
                    
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">C++</h3>
                        <div className="flex flex-wrap gap-2">
                          {otherProgrammingSkills.map((skill, id) => (
                              <span key={id} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                {skill}
                              </span> 
                          ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                    <h3 className="text-xl font-bold mb-4"> 📖 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>
                        <strong> B.S. Computer Science </strong> - University of California, Irvine (Sep 2024 - Jun 2027)
                      </li>

                      <li>
                        Relevant Coursework: Python Programming, C++, Data Structures
                      </li>
                    </ul>

                </div>
                
                

            </div>
        </div>
    </section>
  )
};