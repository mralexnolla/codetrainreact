import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PizzaTypes from "./components/PizzaTypes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <PizzaTypes />
      <Footer />
    </div>
  );
}

export default App;
