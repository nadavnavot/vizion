import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid place-items-center col-auto">
      <h1 className="text-2xl text-black">{children}</h1>
    </div>
  );
};

export default Title;
