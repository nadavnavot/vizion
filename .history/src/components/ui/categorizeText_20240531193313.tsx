import React from "react";
import Image from "next/image";

const CategorizeText = () => {
  return (
    <div>
      <div className="text-lg text-navy-blue">
        Way to go! All your transactions for this month are categorized
        <Image
          src="/like_3d_icon.png"
          width={500}
          height={500}
          alt="Like 3D Icon"
        />{" "}
      </div>
    </div>
  );
};

export default CategorizeText;
