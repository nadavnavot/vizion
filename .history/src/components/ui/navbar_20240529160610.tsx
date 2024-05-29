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
          <Link href="/">
            <ToggleGroupItem
              value="overview"
              aria-label="overview"
              onClick={() => setSelectedValue("overview")}
            >
              <FontAwesomeIcon
                icon={faChartColumn}
                className={`h-4 w-8 ${
                  selectedValue === "overview" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
          <Link href="/budget">
            <ToggleGroupItem
              value="budget"
              aria-label="budget"
              onClick={() => setSelectedValue("budget")}
            >
              <FontAwesomeIcon
                icon={faPiggyBank}
                className={`h-4 w-4 ${
                  selectedValue === "budget" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
          <Link href="/goals">
            <ToggleGroupItem
              value="goals"
              aria-label="goals"
              onClick={() => setSelectedValue("goals")}
            >
              <FontAwesomeIcon
                icon={faBullseye}
                className={`h-4 w-4 ${
                  selectedValue === "goals" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
          <Link href="/assets">
            <ToggleGroupItem
              value="assets"
              aria-label="assets"
              onClick={() => setSelectedValue("assets")}
            >
              <FontAwesomeIcon
                icon={faBuildingColumns}
                className={`h-4 w-4 ${
                  selectedValue === "assets" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
        </ToggleGroup>
      </div>
    </div>
  );
}
