import React from 'react';

// 1. IMPORT YOUR IMAGES HERE
// (Make sure the file extensions match your actual files, e.g., .png or .jpg)
import education1 from '../assets/education1.png';
import education2 from '../assets/education2.png';
import education3 from '../assets/education3.jpg';

const Education = () => {
  const SCHOOLS = [
    { 
      name: "Technological University of the Philippines", 
      period: "2023-Present", 
      loc: "Ermita, Manila", 
      degree: "Bachelor of Science in Information Technology",
      logo: education1 // Use the imported variable
    },
    { 
      name: "St. Mary Magdalene School", 
      period: "2021-2023", 
      loc: "Kawit, Cavite", 
      degree: "Senior High School",
      logo: education2 // Use the imported variable
    },
    { 
      name: "General Emilio Aguinaldo National HS", 
      period: "2017-2021", 
      loc: "Imus, Cavite", 
      degree: "Junior High School",
      logo: education3 // Use the imported variable
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-24 text-center text-gray-900 dark:text-white" data-aos="fade-down">
          My <span className="text-primary">Journey</span>
        </h2>

        {/* CARD LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-8 px-4">
          
          {SCHOOLS.map((school, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[1rem] p-8 pt-16 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* --- 1. THE FLOATING LOGO (Updated for Images) --- */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-[8px] border-gray-50 dark:border-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {/* IMAGE TAG */}
                <img 
                  src={school.logo} 
                  alt={`${school.name} logo`} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* --- 2. THE CONTENT --- */}
              <div className="flex flex-col items-center gap-3">
                
                {/* Year */}
                <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                  {school.period}
                </span>

                {/* School Name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {school.name}
                </h3>

                {/* Location */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {school.loc}
                </p>

                {/* Divider Line */}
                <div className="w-12 h-1 bg-primary/20 rounded-full my-2 group-hover:bg-primary transition-colors"></div>

                {/* Degree */}
                <p className="text-base font-medium text-primary">
                  {school.degree}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;