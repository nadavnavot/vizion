import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import Title from "./title";

const NetWorth = () => {
  return (
    <div className="px-64 rounded-lg bg-navy-blue shadow-md">
      <p className="text-grey-500">Net Worth</p>
      <Title>
        <span className="text-white text-5xl">60,293€</span>
      </Title>
      <FontAwesomeIcon icon={faArrowTrendUp} />
      <p className="text-white">2,859€ more than last month</p>
    </div>
  );
};

export default NetWorth;
