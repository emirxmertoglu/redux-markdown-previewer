const HintButton = () => {
  return (
    <button
      className="px-2 py-1 absolute right-4 top-4 text-2xl font-bold bg-yellow-200"
      onClick={() => console.log("clicked")}
    >
      ?
    </button>
  );
};

export default HintButton;
