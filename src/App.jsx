import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="bg-black ">
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
      </main>
    </>
  );
}

export default App;
