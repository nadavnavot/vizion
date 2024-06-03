import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFilm,
  faUtensils,
  faPlaneDeparture,
  faCartShopping,
  faBasketShopping,
  faArrowRightArrowLeft,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const StepCategory = () => (
  <div className="flex justify-center items-center h-full">
    <div className="grid grid-cols-3 gap-4">
      {[
        faReceipt,
        faFilm,
        faUtensils,
        faPlaneDeparture,
        faCartShopping,
        faBasketShopping,
        faArrowRightArrowLeft,
        faBus,
      ].map((icon, index) => (
        <div
          key={index}
          className="flex justify-center items-center w-16 h-16 rounded-full bg-navy-blue text-white"
        >
          <FontAwesomeIcon icon={icon} />
        </div>
      ))}
    </div>
  </div>
);

export default StepCategory;
