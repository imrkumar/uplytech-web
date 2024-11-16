// src/components/Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-lg rounded-md p-6 text-center w-80">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
