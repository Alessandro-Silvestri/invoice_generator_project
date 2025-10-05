import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-amber-400 font-bold">Hello world!</h1>
      <div className="flex flex-wrap gap-2">
        <div className="w-full sm:w-14 flex-none bg-amber-700">01</div>

        <div className="w-1/2 sm:w-64 flex-1 bg-blue-500">02</div>
        <div className="w-1/2 sm:w-32 flex-1 bg-amber-700">03</div>
      </div>
    </div>
  );
}

export default App;
