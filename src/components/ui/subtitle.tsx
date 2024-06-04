import React from "react";

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="text-xl font-medium text-black font-heading">
        {children}
      </h1>
    </div>
  );
};

export default Subtitle;
