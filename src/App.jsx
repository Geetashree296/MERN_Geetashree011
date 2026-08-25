import Counter from "./components/Counter";
import Hero from "./components/Hero";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ItemList/>
      <Counter />
    </div>
  );
}

export default App;