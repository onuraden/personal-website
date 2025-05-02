
import React from "react";
import { cardData } from '../data';

const Project = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 h-[41.75rem]">
      {cardData.map((card, index) => (
        <div key={index} className="bg-[#DDEEFE] p-6 rounded-lg">
          <h2 className="font-playfair font-bold text-[29px] leading-none tracking-[0.05em] mb-6">{card.title}</h2>
          <p className="font-normal text-base leading-relaxed tracking-normal mb-4">{card.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {card.tags.map((tag, i) => (
              <span key={i} className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between font-semibold">
            <a href={card.githubUrl} target="_blank" rel="noopener noreferrer">View on Github</a>
            <a href={card.appUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Go to app <span className="ml-1">→</span>
            </a>
          </div>
          <img className="absolute top-[32rem]" src={card.src} />
        </div>
      ))}
    </div>
  );
};

export default Project;
