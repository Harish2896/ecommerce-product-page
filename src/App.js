import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import ProductCarousel from "./components/Product/ProductCarousel";

function App() {
  const [noOfItems, setNoOfItems] = useState(0);
  return (
    <main className="w-full mx-auto md:px-5 lg:px-20 bg-white">
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <ProductCarousel setNoOfItems={setNoOfItems} />
    </main>
  );
}

export default App;
