import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import React from "react";

const assetsData = {
  bankAccounts: {
    title: "Bank accounts",
    total: "3,476€",
    items: [
      {
        name: "Revolut",
        amount: "1,823€",
        image: "/revolut.png",
      },
      {
        name: "ING",
        amount: "961€",
        image: "/ing.png",
      },
      {
        name: "Wise",
        amount: "692€",
        image: "/wise.png",
      },
    ],
  },
  stocks: {
    title: "Stocks",
    total: "5,872€",
    items: [
      {
        name: "iShares S&P 500",
        amount: "3,976€",
        image: "/ishares.png",
      },
      {
        name: "Tesla",
        amount: "1,896€",
        image: "/tesla.png",
      },
    ],
  },
  pension: {
    title: "Pension",
    total: "10,081€",
    items: [
      {
        name: "ING - pension",
        amount: "10,081€",
        image: "/ing.png",
      },
    ],
  },
};

export default function Assets() {
  return (
    <div>
      <Title>Asset Management</Title>

      {Object.values(assetsData).map((category) => (
        <div key={category.title} className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <Subtitle>{category.title}</Subtitle>
            <h4 className="text-green-500 text-right">{category.total}</h4>
          </div>
          {category.items.map((item) => (
            <div key={item.name} className="flex items-center mb-4">
              <Image
                src={item.image}
                width={50}
                height={50}
                alt={item.name}
                className="rounded-full border-solid border-black border-2 mr-4"
              />
              <div className="flex-grow">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">{item.amount}</p>
              </div>
              <Switch />
            </div>
          ))}
        </div>
      ))}

      <Navbar />
    </div>
  );
}
