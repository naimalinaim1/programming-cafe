import React from "react";

const SpentTime = ({ readTime }) => {
  return (
    <div className="border border-primary rounded-lg bg-primary/10 py-2.5">
      <p className="text-center text-xl lg:text-2xl text-primary font-bold">
        Spent time on read: {readTime} min
      </p>
    </div>
  );
};

export default SpentTime;
