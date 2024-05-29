import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddEditIcons = () => {
  return (
    <div className="flex justify-end items-right my-6">
      <FontAwesomeIcon
        icon={faPlus}
        size="xl"
        className="mr-2 text-navy-blue"
      />
      <FontAwesomeIcon icon={faPen} size="xl" />
    </div>
  );
};

export default AddEditIcons;
