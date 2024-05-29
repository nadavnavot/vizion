"use client";

import { useRouter } from "next/router";
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
  const router = useRouter();

  const getSelectedValue = (path: string) => {
    switch (path) {
      case "/":
        return "overview";
      case "/budget":
        return "budget";
      case "/goals":
        return "goals";
      case "/assets":
        return "assets";
      default:
        return "";
    }
  };

  const selectedValue = getSelectedValue(router.pathname);

  return (
    <div className="fixed bottom-10 left-0 w-full flex justify-center">
      <div className="w-9/12 p-4 rounded-[50px] bg-navy-blue">
        <ToggleGroup
          type="single"
          value={selectedValue}
          onValueChange={(value) => {
            if (value) {
              router.push(`/${value}`);
            }
          }}
        >
          <Link href="/" passHref>
            <ToggleGroupItem value="overview" aria-label="overview">
              <FontAwesomeIcon
                icon={faChartColumn}
                className={`h-4 w-8 ${
                  selectedValue === "overview" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
          <Link href="/budget" passHref>
            <ToggleGroupItem value="budget" aria-label="budget">
              <FontAwesomeIcon
                icon={faPiggyBank}
                className={`h-4 w-4 ${
                  selectedValue === "budget" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
          <Link href="/goals" passHref>
            <ToggleGroupItem value="goals" aria-label="goals">
              <FontAwesomeIcon
                icon={faBullseye}
                className={`h-4 w-4 ${
                  selectedValue === "goals" ? "text-neon" : ""
                }`}
              />
            </ToggleGroupItem>
          </Link>
          <Link href="/assets" passHref>
            <ToggleGroupItem value="assets" aria-label="assets">
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
