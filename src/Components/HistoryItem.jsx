import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FeaturePrograms.css'; // Ensure this CSS file is imported

const HistoryItem = ({ image, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the item is visible
  });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex px-32 my-12 justify-between items-start gap-6 slide-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s` }} // Add delay based on index
    >
    {isEven ? (
        <>
        <img
          src={image}
          alt={title}
          className="w-[450px] rounded-xl border-white shadow-md"
        />
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </>
    ) : (
      <>
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p>{description}</p>
        </div>
        <img
          src={image}
          alt={title}
          className="w-[450px] rounded-xl border-white shadow-md"
        />
      </>
    )}
    </div>
  );
};

export default HistoryItem;