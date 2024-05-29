import React from "react";

const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="text-xl text-black p-8">{children}</h1>
    </div>
  );
};

export default Subtitle;
