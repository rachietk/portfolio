import React from 'react';
import Container from "./Container";

const WorkExperience = () => {
  return (
    <Container>
      <section className="text-gray4100">
        <h2 className="text-sm font-mono mb-4 md:gap-2">
          Work <span className="text-gray-500 font-normal">Here is my work experience!</span>
        </h2>

        <div className="flex flex-col gap-4">
          {/* Single Work Entry */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
            
            {/* Left section */}
            <div className="flex flex-col">
              <h3 className="flex items-center gap-2 text-sm">
                Highspring India
                {/* <span className="text-xs bg-gray-700 text-gray-300 rounded-full px-2 py-1 font-medium">
                  Intern
                </span> */}
              </h3>
              <p className="text-gray-300 mt-1 text-xs">Associate Analyst</p>
            </div>

            {/* Right section */}
            <div className="text-gray-400 text-xs sm:text-right mt-2 sm:mt-0">
              <p>Sept 2025 - Present 2026</p>
              <p>Meerut, Hybrid</p>
              {/* <p>Walmart DSS</p> */}
            </div>

          </div>

          {/* Description aligned to start */}
          <div className="text-gray-300 text-xs mt-2">
            {/* <p>• Creating a comprehensive collection of 100+ background block designs. Building reusable UI components with stunning visual backgrounds.</p> */}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WorkExperience;
