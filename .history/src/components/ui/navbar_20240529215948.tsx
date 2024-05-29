"use client";

import { useState } from "react";
import Link from "next/link";
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
    <div className="fixed bottom-10 left-0 w-full flex justify-center">
      <div className="w-9/12 p-4 rounded-[50px] bg-navy-blue">
        <ToggleGroup
          type="single"
          value={selectedValue}
          onValueChange={handleSelect}
        >
          <ToggleGroupItem
            value="overview"
            aria-label="overview"
            onClick={() => setSelectedValue("overview")}
          >
            <Link href="/">
              <FontAwesomeIcon
                icon={faChartColumn}
                className={`h-4 w-8 ${
                  selectedValue === "overview" ? "text-neon" : ""
                }`}
              />
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="budget"
            aria-label="budget"
            onClick={() => setSelectedValue("budget")}
          >
            <Link href="/budget">
              <FontAwesomeIcon
                icon={faPiggyBank}
                className={`h-4 w-4 ${
                  selectedValue === "budget" ? "text-neon" : ""
                }`}
              />
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="goals"
            aria-label="goals"
            onClick={() => setSelectedValue("goals")}
          >
            <Link href="/goals">
              <FontAwesomeIcon
                icon={faBullseye}
                className={`h-4 w-4 ${
                  selectedValue === "goals" ? "text-neon" : ""
                }`}
              />
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="assets"
            aria-label="assets"
            onClick={() => setSelectedValue("assets")}
          >
            <Link href="/assets">
              <FontAwesomeIcon
                icon={faBuildingColumns}
                className={`h-4 w-4 ${
                  selectedValue === "assets" ? "text-neon" : ""
                }`}
              />
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
        {selectedValue}
      </div>
    </div>
  );
}
