import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

export default function assets() {
  return (
    <div>
      <Title>Asset Management</Title>
      <Subtitle>Bank accounts</Subtitle>
      <h4 className="text-green-500">3,476€</h4>
      <Image src="/revolut.png" width={50} height={50} alt="Revolut" />

      <p>Revolut</p>
      <p>1,823€</p>
      <Switch />
      <Navbar />
    </div>
  );
}
