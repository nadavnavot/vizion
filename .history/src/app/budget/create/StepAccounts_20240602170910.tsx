import React, { useState } from "react";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";
import ing from "/public/ing.png";
import revolut from "/public/revolut.png";
import wise from "/public/wise.png";

const accounts = [
  { name: "ING", src: ing },
  { name: "Revolut", src: revolut },
  { name: "Wise", src: wise },
];

const StepAccounts = () => {
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const toggleAccount = (accountName: string) => {
    setSelectedAccounts((prevSelected) =>
      prevSelected.includes(accountName)
        ? prevSelected.filter((name) => name !== accountName)
        : [...prevSelected, accountName]
    );
  };

  return (
    <div>
      <Subtitle>Accounts</Subtitle>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-4">
          {accounts.map((account, index) => (
            <div
              key={index}
              onClick={() => toggleAccount(account.name)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-full overflow-hidden ${
                  selectedAccounts.includes(account.name)
                    ? "border-4 border-blue-500"
                    : "border-4 border-transparent"
                }`}
              >
                <Image
                  src={account.src}
                  alt={account.name}
                  width={64}
                  height={64}
                />
              </div>
              <label className="mt-2 text-center">{account.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepAccounts;
