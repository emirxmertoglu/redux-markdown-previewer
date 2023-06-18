import Header from "@/components/Header";
import HintButton from "@/components/HintButton";
import Editor from "@/components/Editor";
import Output from "@/components/Output";

function App() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-[1200px] h-screen">
      <HintButton />
      <Header />

      <div className="mt-4 grid lg:grid-cols-2 gap-4 h-3/4">
        <Editor />
        <Output />
      </div>
    </div>
  );
}

export default App;
