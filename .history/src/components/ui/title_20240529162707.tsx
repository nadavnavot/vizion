import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-black">{children}</h1>
    </div>
  );
};

export default Title;
