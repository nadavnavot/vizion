import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-black">{children}</h1>
    </div>
  );
};

export default Title;
