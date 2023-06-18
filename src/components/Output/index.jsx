import { useSelector } from "react-redux";
import { marked } from "marked";

const Output = () => {
  const { text } = useSelector((state) => state.parser);
  const parsed = marked
    .options({ mangle: false, headerIds: false })
    .parse(text);

  return (
    <div
      className="p-4 min-h-1/2 lg:h-full overflow-auto text-xl bg-white resize-none shadow-md"
      dangerouslySetInnerHTML={{ __html: parsed }}
    />
  );
};

export default Output;
