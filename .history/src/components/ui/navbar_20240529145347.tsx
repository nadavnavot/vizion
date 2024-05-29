"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faPiggyBank,
  faBullseye,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [selectedValue, setSelectedValue] = useState("overview");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="mx-4 p-4 rounded-[50px] bg-navy-blue">
      <ToggleGroup
        type="single"
        value={selectedValue}
        onValueChange={handleSelect}
      >
        <ToggleGroupItem value="overview" aria-label="overview">
          <FontAwesomeIcon
            icon={faChartColumn}
            className={`h-4 w-8 ${
              selectedValue === "overview" ? "text-neon" : ""
            }`}
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="budget" aria-label="budget">
          <FontAwesomeIcon
            icon={faPiggyBank}
            className={`h-4 w-4 ${
              selectedValue === "budget" ? "text-white" : ""
            }`}
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="goals" aria-label="goals">
          <FontAwesomeIcon
            icon={faBullseye}
            className={`h-4 w-4 ${
              selectedValue === "goals" ? "text-white" : ""
            }`}
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="asset" aria-label="asset">
          <FontAwesomeIcon
            icon={faBuildingColumns}
            className={`h-4 w-4 ${
              selectedValue === "asset" ? "text-white" : ""
            }`}
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
