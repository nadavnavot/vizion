import React from "react";
import Subtitle from "@/components/ui/subtitle";
import { Textarea } from "@/components/ui/textarea";

const StepDescription = ({
  description,
  setDescription,
}: {
  description: string;
  setDescription: (desc: string) => void;
}) => (
  <div>
    <Subtitle>Add description: (optional) </Subtitle>
    <Textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      style={{ height: "200px", marginTop: "30px" }}
    />
  </div>
);

export default StepDescription;
