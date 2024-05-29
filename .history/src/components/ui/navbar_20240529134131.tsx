import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faPiggyBank,
  faBullseye,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <ToggleGroup type="single">
      <ToggleGroupItem value="overview" aria-label="Toggle bold">
        <FontAwesomeIcon icon={faChartColumn} className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="budget" aria-label="Toggle italic">
        <FontAwesomeIcon icon={faPiggyBank} className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="goals" aria-label="Toggle strikethrough">
        <FontAwesomeIcon icon={faBullseye} className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="asset" aria-label="Toggle strikethrough">
        <FontAwesomeIcon icon={faBuildingColumns} className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
