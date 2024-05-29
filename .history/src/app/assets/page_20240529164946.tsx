import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function Assets() {
  return (
    <div className="p-4">
      <Title>Asset Management</Title>

      {/* Bank Accounts Section */}
      <div className="mb-6">
        <Subtitle>Bank accounts</Subtitle>
        <h4 className="text-green-500 text-right">3,476€</h4>
        <div className="flex items-center mb-4">
          <Image
            src="/revolut.png"
            width={50}
            height={50}
            alt="Revolut"
            className="rounded-full border-solid border-black border-2 mr-4"
          />
          <div className="flex-grow">
            <p>Revolut</p>
            <p>1,823€</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center mb-4">
          <Image
            src="/ing.png"
            width={50}
            height={50}
            alt="ING"
            className="rounded-full border-solid border-black border-2 mr-4"
          />
          <div className="flex-grow">
            <p>ING</p>
            <p>961€</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center mb-4">
          <Image
            src="/wise.png"
            width={50}
            height={50}
            alt="Wise"
            className="rounded-full border-solid border-black border-2 mr-4"
          />
          <div className="flex-grow">
            <p>Wise</p>
            <p>692€</p>
          </div>
          <Switch />
        </div>
      </div>

      {/* Stocks Section */}
      <div className="mb-6">
        <Subtitle>Stocks</Subtitle>
        <h4 className="text-green-500 text-right">5,872€</h4>
        <div className="flex items-center mb-4">
          <Image
            src="/ishares.png"
            width={50}
            height={50}
            alt="iShares S&P 500"
            className="rounded-full border-solid border-black border-2 mr-4"
          />
          <div className="flex-grow">
            <p>iShares S&P 500</p>
            <p>3,976€</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center mb-4">
          <Image
            src="/tesla.png"
            width={50}
            height={50}
            alt="Tesla"
            className="rounded-full border-solid border-black border-2 mr-4"
          />
          <div className="flex-grow">
            <p>Tesla</p>
            <p>1,896€</p>
          </div>
          <Switch />
        </div>
      </div>

      {/* Pension Section */}
      <div className="mb-6">
        <Subtitle>Pension</Subtitle>
        <h4 className="text-green-500 text-right">10,081€</h4>
        <div className="flex items-center mb-4">
          <Image
            src="/ing_pension.png"
            width={50}
            height={50}
            alt="ING - pension"
            className="rounded-full border-solid border-black border-2 mr-4"
          />
          <div className="flex-grow">
            <p>ING - pension</p>
            <p>10,081€</p>
          </div>
          <Switch />
        </div>
      </div>

      <Navbar />
    </div>
  );
}
