import { useDispatch } from "react-redux";
import { helpText } from "@/reducers/parserSlice";

const HintButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(helpText());
  };

  return (
    <button
      className="px-2 py-1 absolute right-4 top-4 text-2xl font-bold bg-yellow-200"
      onClick={handleClick}
    >
      ?
    </button>
  );
};

export default HintButton;
