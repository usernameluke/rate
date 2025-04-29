import { Navbar } from "./components/Navbar";
import { Series } from "./components/Series";
import { Films } from "./components/Films";
import { Footer } from "./components/Footer";
import "./App.css";
import { YetToSee } from "./components/YetToSee";
import { slides } from "./data/carouselData.json"
import { Routes, Route } from "react-router-dom";
import { Watchlist } from "./pages/Watchlist";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="mainpage">
        <Routes>
          <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
        <Series data={slides} />
        <Films data={slides}/>
        <YetToSee data={slides}/>
      </div>
      <div className="footer">
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
