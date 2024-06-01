"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faPiggyBank,
  faBullseye,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const currentPath = usePathname();

  const navItems = [
    { path: "/", label: "Overview", icon: faChartColumn },
    { path: "/budget", label: "Budget", icon: faPiggyBank },
    { path: "/goals", label: "Goals", icon: faBullseye },
    { path: "/assets", label: "Assets", icon: faBuildingColumns },
  ];

  return (
    <div className="fixed bottom-20 left-0 w-full flex justify-center">
      <div className="w-9/12 p-4 rounded-full bg-navy-blue flex justify-around">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <div
              className={`cursor-pointer flex flex-col items-center ${
                currentPath === item.path ? "text-neon" : "text-gray-400"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
              {/* <span className="mt-2">{item.label}</span> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
