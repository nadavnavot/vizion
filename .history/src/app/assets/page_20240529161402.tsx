import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";

export default function Home() {
  return (
    <div>
      <Title>Asset Management</Title>
      <Subtitle>Bank accounts</Subtitle>
      <h4 className="text-green-500">3,476€</h4>
      <Navbar />
    </div>
  );
}
