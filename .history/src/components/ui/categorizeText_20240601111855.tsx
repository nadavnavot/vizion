import React from "react";
import Image from "next/image";

const CategorizeText = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-lg text-navy-blue flex items-center justify-center">
        <span className="mr-2">
          Way to go! All your transactions for this month are categorized
        </span>
        <Image
          src="/like_3d_icon.png"
          width={50}
          height={50}
          alt="Like 3D Icon"
        />
      </div>
    </div>
  );
};

export default CategorizeText;
