import { useSelector, useDispatch } from "react-redux";
import { updateText } from "@/reducers/parserSlice";

const Editor = () => {
  const { text } = useSelector((state) => state.parser);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateText(e.target.value));
  };

  return (
    <textarea
      className="p-4 block min-h-1/2 lg:h-full max-h-full overflow-auto text-xl resize-none shadow-md"
      value={text}
      onChange={handleChange}
    />
  );
};

export default Editor;
