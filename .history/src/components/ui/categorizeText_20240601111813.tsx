import React from "react";
import Image from "next/image";

const CategorizeText = () => {
  return (
    <div>
      <div className="text-lg text-navy-blue text-center">
        Way to go! All your transactions for this month are categorized
        <Image
          src="/like_3d_icon.png"
          width={50}
          height={50}
          alt="Like 3D Icon"
          className="align-center"
        />{" "}
      </div>
    </div>
  );
};

export default CategorizeText;
