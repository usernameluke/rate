import { Navbar } from "./components/Navbar";
import { Series } from "./components/Series";
import { Films } from "./components/Films";
import { ToSee } from "./pages/ToSee";
import { Footer } from "./components/Footer";
import "./App.css";
import { YetToSee } from "./components/YetToSee";
import { slides } from "./data/carouselData.json"
import { Routes, Route } from "react-router-dom";
import { Watchlist } from "./pages/Watchlist";
import { Info } from "./pages/Info";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="mainpage">
        <Routes>
          <Route path="/watchlist" element={<Watchlist data={slides}/>}/>
          <Route path="/watchlist/toSee" element={<ToSee data={slides}/>}/>
          <Route path="/series" element={<Series data={slides} />}/>
          <Route path="/films" element={<Films data={slides}/>}/>
          <Route path="/info/:specificId" element={<Info data={slides}/>}/>
          
        </Routes>
      </div>
      <div className="footer">
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
