import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-black flex w-full flex-wrap items-start justify-between gap-8 bg-blue p-4">
        {children}
      </h1>
    </div>
  );
};

export default Title;
