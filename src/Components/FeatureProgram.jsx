import React from 'react';
import { useInView } from "react-intersection-observer";
import ProgramsCard from "./ProgramsCard";
import "./FeaturePrograms.css"; // Import the CSS file

const FeaturedPrograms = ({ programs }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div>
      <div className="divider my-10 font-extrabold text-5xl">Featured Programs</div>
      <div
        ref={ref}
        className={`flex flex-wrap justify-center gap-4 slide-up ${inView ? 'visible' : ''}`}
      >
        {programs.map((program, index) => (
          <ProgramsCard
            key={index}
            image={program.image}
            title={program.title}
            description={program.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPrograms;