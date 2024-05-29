import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import Title from "./title";

const NetWorth = () => {
  return (
    <div className="py-12 rounded-lg bg-navy-blue shadow-md flex align-baseline">
      <p className="text-grey-500">Net Worth</p>
      <Title>
        <span className="text-white text-4xl">60,293€</span>
      </Title>
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faArrowTrendUp} className="text-neon" />
        <p className="text-white">2,859€ more than last month</p>
      </div>
    </div>
  );
};

export default NetWorth;
