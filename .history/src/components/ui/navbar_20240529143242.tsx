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
    <div className="mx-4 p-4 rounded-[50px] bg-navy-blue">
      <ToggleGroup type="single">
        <ToggleGroupItem value="overview" aria-label="overview">
          <FontAwesomeIcon icon={faChartColumn} className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="budget" aria-label="budget">
          <FontAwesomeIcon icon={faPiggyBank} className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="goals" aria-label="goals">
          <FontAwesomeIcon icon={faBullseye} className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="asset" aria-label="asset">
          <FontAwesomeIcon icon={faBuildingColumns} className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
