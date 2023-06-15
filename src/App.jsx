import Header from "@/components/Header";
import HintButton from "@/components/HintButton";

function App() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-[1200px] h-screen">
      <HintButton />
      <Header />

      <div className="grid grid-cols-2 gap-4">
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  );
}

export default App;
