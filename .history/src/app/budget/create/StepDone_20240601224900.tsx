import React from "react";
import Subtitle from "../../../components/ui/subtitle";
import Image from "next/image";

const StepDone = () => (
  <div>
    <Subtitle>Done </Subtitle>
    <Image
      src="/checkmark.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />{" "}
  </div>
);

export default StepDone;
