import React from "react";

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="text-xl  text-black font-heading font-medium mt-8 mb-2">
        {children}
      </h1>
    </div>
  );
};

export default Subtitle;
