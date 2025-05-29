// src/components/ui/card.js
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;
