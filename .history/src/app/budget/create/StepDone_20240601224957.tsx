import React from "react";
import Subtitle from "../../../components/ui/subtitle";
import Image from "next/image";

const StepDone = () => (
  <div>
    <Subtitle>Done </Subtitle>
    <h1> The groceries budget has been added!</h1>
    <Image
      src="/checkmark.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />{" "}
  </div>
);

export default StepDone;
