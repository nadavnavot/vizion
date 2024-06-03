import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";
import HorizontalLinearStepper from "@/components/ui/progressBar";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div>
      <Title>Goals</Title>
      <Progress />
      <HorizontalLinearStepper />
      <Navbar />
    </div>
  );
}
