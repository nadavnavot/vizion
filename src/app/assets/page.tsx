"use client";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import { Switch } from "../../components/ui/switch";
import Image from "next/image";
import React, { useState } from "react";
import AddEditIcons from "@/components/ui/addEditIcons";

interface AssetItem {
  name: string;
  amount: number;
  image: string;
  included: boolean;
}

interface AssetCategory {
  title: string;
  total: number;
  items: AssetItem[];
}

interface AssetsData {
  bankAccounts: AssetCategory;
  stocks: AssetCategory;
  pension: AssetCategory;
}

const initialAssetsData: AssetsData = {
  bankAccounts: {
    title: "Bank accounts",
    total: 3476,
    items: [
      {
        name: "Revolut",
        amount: 1823,
        image: "/revolut.png",
        included: true,
      },
      {
        name: "ING",
        amount: 961,
        image: "/ing.png",
        included: true,
      },
      {
        name: "Wise",
        amount: 692,
        image: "/wise.png",
        included: true,
      },
    ],
  },
  stocks: {
    title: "Stocks",
    total: 5872,
    items: [
      {
        name: "iShares S&P 500",
        amount: 3976,
        image: "/ishares.png",
        included: true,
      },
      {
        name: "Tesla",
        amount: 1896,
        image: "/tesla.png",
        included: true,
      },
    ],
  },
  pension: {
    title: "Pension",
    total: 10081,
    items: [
      {
        name: "ING - pension",
        amount: 10081,
        image: "/ing.png",
        included: true,
      },
    ],
  },
};

export default function Assets() {
  const [assetsData, setAssetsData] = useState<AssetsData>(initialAssetsData);

  const handleSwitchChange = (
    categoryKey: keyof AssetsData,
    itemName: string,
    newChecked: boolean
  ) => {
    setAssetsData((prevData) => {
      const newData = { ...prevData };
      const category = newData[categoryKey];
      const item = category.items.find((item) => item.name === itemName);
      if (item) {
        item.included = newChecked;
      }
      category.total = calculateTotal(category.items);
      return newData;
    });
  };

  const calculateTotal = (items: AssetItem[]): number => {
    return items
      .filter((item) => item.included)
      .reduce((sum, item) => sum + item.amount, 0);
  };

  const formatAmount = (amount: number): string => {
    return amount.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="p-8 mb-36">
      <Title>Asset Management</Title>
      <AddEditIcons />
      {Object.entries(assetsData).map(([categoryKey, category]) => (
        <div key={category.title} className="my-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-medium">{category.title}</div>
            <h4 className="text-green-500 text-right">
              {formatAmount(category.total)}
            </h4>
          </div>
          {category.items.map((item: any) => (
            <div key={item.name} className="flex items-center mb-4">
              <div
                style={{ width: "50px", height: "50px" }}
                className="rounded-full border-solid border-black border-2 mr-4 overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.name}
                />
              </div>
              <div className="flex-grow">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">{formatAmount(item.amount)}</p>
              </div>
              <Switch
                checked={item.included}
                onCheckedChange={(newChecked) =>
                  handleSwitchChange(
                    categoryKey as keyof AssetsData,
                    item.name,
                    newChecked
                  )
                }
                className={`${
                  item.included ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-6 rounded-full w-11`}
              >
                <span
                  className={`${
                    item.included ? "translate-x-6" : "translate-x-1"
                  } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
              </Switch>
            </div>
          ))}
        </div>
      ))}
      <Navbar />
    </div>
  );
}
