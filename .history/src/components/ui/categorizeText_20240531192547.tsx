import React from "react";
import Image from "next/image";

const categorizeText = () => {
  return (
    <div>
      <div className="text-lg text-navy-blue">
        Way to go! All your transactions for this month are categorized
        <Image
          src="../"
          width={500}
          height={500}
          alt="Picture of the author"
        />{" "}
      </div>
    </div>
  );
};
export default categorizeText;
