import { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState("");
  // effectHook dependencies
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="clothing">clothing</option>
        <option value="kitchen">kitchen</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
