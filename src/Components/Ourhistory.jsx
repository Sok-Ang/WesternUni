import React from 'react';
import HistoryItem from './HistoryItem';
import './FeaturePrograms.css'; // Ensure this CSS file is imported

const OurHistory = () => {
  const historyItems = [
    {
      image: 'img/classroom.jpg',
      title: 'Heavenly Demon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: 'img/student.jpg',
      title: 'Student Life',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: 'img/herobg.jpg',
      title: 'Campus Growth',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: 'img/kru.jpg',
      title: 'Community Impact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <section className="our-history-section">
      <h2 className="text-center font-extrabold text-5xl mt-10">Our History</h2>
      {historyItems.map((item, index) => (
        <HistoryItem
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
          index={index} // Pass the index for staggered animation
        />
      ))}
    </section>
  );
};

export default OurHistory;