import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./templates/Navbar";
import Hero from "./components/Hero";
import QuickItemLists from "./components/lists/QuickItemLists";
import Footer from "./templates/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <QuickItemLists title="Quick Burger" />
      <QuickItemLists title="Quick Chicken" />
      <QuickItemLists title="Quick Drink" />
      <Footer />
    </>
  );
}

export default App;
