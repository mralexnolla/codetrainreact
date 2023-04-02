import Footer from "./components/Footer";
import Header from "./components/Header";
import PlacesCard from "./components/PlacesCard";
import Symbols from "./components/Symbols";
import Visit from "./components/Visit";


function App() {
  return (
    <div className="App">
      
        <Header />
        <Symbols />
        <Visit/>
        <PlacesCard />
        <Footer />
      
    </div>
  );
}

export default App;
