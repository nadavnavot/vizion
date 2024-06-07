import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getBudgets, deactivateBudget } from "../db/actions/budgetAction";
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
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default async function BudgetCard() {
  const { data, errMsg } = await getBudgets();

  if (errMsg) return <h1>{errMsg}</h1>;

  return (
    <div>
      <Title>Budget</Title>
      <div className="">
        {data
          .filter((item: any) => item.active)
          .map((item: any) => (
            <div
              key={item._id}
              className="flex items-center p-4 bg-white rounded-lg shadow-md my-8 h-32"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 mr-4 rounded-full`}
                style={{ backgroundColor: item.categoryColor }}
              >
                <FontAwesomeIcon
                  icon={
                    item.categoryIcon === "faReceipt"
                      ? faReceipt
                      : item.categoryIcon === "faFilm"
                      ? faFilm
                      : item.categoryIcon === "faUtensils"
                      ? faUtensils
                      : item.categoryIcon === "faPlaneDeparture"
                      ? faPlaneDeparture
                      : item.categoryIcon === "faCartShopping"
                      ? faCartShopping
                      : item.categoryIcon === "faBasketShopping"
                      ? faBasketShopping
                      : item.categoryIcon === "faArrowRightArrowLeft"
                      ? faArrowRightArrowLeft
                      : item.categoryIcon === "faBus"
                      ? faBus
                      : faQuestion
                  }
                  className="text-white"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  {" "}
                  {/* Added items-center */}
                  <span className="font-medium">{item.categoryName}</span>
                  <span
                    className={
                      item.amountSpent > item.amountTotal ? "text-red-500" : ""
                    }
                  >
                    {item.amountSpent}€
                  </span>{" "}
                  / {item.amountTotal ? item.amountTotal : 0}€
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="text-gray-500 ml-2 cursor-pointer"
                  />{" "}
                  {/* Added trash can icon */}
                </div>
                <div
                  className={`w-full h-2 rounded-full bg-gray-200 overflow-hidden`}
                >
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${
                        item.amountTotal
                          ? (item.amountSpent / item.amountTotal) * 100
                          : 0
                      }%`,
                      backgroundColor:
                        item.amountSpent > item.amountTotal
                          ? "#ED4337"
                          : "#0000004D",
                    }}
                  ></div>{" "}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="fixed bottom-40 right-8">
        <div className="flex items-center justify-center w-12 h-12 bg-navy-blue rounded-full shadow-lg">
          <Link href="/budget/create">
            <FontAwesomeIcon icon={faPlus} className="text-white" />
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
