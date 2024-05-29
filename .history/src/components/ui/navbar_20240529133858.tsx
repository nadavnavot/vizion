import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <FontAwesomeIcon icon={faChartColumn} className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <FontAwesomeIcon icon={faPiggyBank} className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <FontAwesomeIcon icon={faChartColumn} className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <FontAwesomeIcon icon={faChartColumn} className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
