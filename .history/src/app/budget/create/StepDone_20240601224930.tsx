import React from "react";
import Subtitle from "../../../components/ui/subtitle";
import Image from "next/image";

const StepDone = () => (
  <div>
    <Subtitle>The groceries budget has been added! </Subtitle>
    <Image
      src="/checkmark.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />{" "}
  </div>
);

export default StepDone;
