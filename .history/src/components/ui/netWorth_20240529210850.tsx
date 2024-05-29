import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import Title from "./title";

const NetWorth = () => {
  return (
    <div className="px-64 rounded-lg bg-navy-blue shadow-md">
      <p>Net Worth</p>
      <Title>60,293€</Title>
      <FontAwesomeIcon icon={faArrowTrendUp} />
      <p>2,859€ more than last month</p>
    </div>
  );
};

export default NetWorth;
