import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddEditIcons = () => {
  return (
    <div className="flex justify-end items-right my-4">
      <FontAwesomeIcon
        icon={faPlus}
        size="lg"
        className="mr-2 bg-navy-blue text-white p-2 rounded-md"
      />
      <FontAwesomeIcon
        icon={faPen}
        size="lg"
        className=" bg-navy-blue text-white p-2 rounded-md"
      />
    </div>
  );
};

export default AddEditIcons;
