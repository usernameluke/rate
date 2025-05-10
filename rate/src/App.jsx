import { Navbar } from "./components/Navbar";
import { Series } from "./components/Series";
import { Films } from "./components/Films";
import { Routes, Route } from "react-router-dom";
import { WantToWatch } from "./pages/WantToWatch";
import Info from "./pages/Info";
import { Browse } from "./pages/Browse";
// import { Watching } from "./pages/Watching";
// import { Watched } from "./pages/Watched";

function App() {
  return (
    <div className="app">
      <Navbar />
      <header id="#" className="header">
        <h1 className="text-white cinzel-500 text-5xl text-center welcome-title">
          Welcome to R8+ <hr />
        </h1>
        <p className="cinzel-500 text-white text-center text-xl welcome-text">
          your guide to the highest-rated films and shows
        </p>
      </header>
      <main className="mainpage">
        <Routes>
          <Route path="/wanttowatch" element={<WantToWatch/>} />
          {/* <Route path="/watching" element={<Watching data={slides} />} />
          <Route path="/watching" element={<Watched data={slides} />} /> */}
          <Route path="/browse" element={<Browse/>} />
          <Route path="/films" element={<Films />} />
          <Route path="/info/:specificId" element={<Info />} />
        </Routes>

        <section id="browse">
          <Browse/>
        </section>

        <section id="to-watch">
          <WantToWatch/>
        </section>

        {/* <section id="watching">
          <Watching data={slides} />
        </section>

        <section id="watched">
          <Watched data={slides} />
        </section> */}

        <section id="custom-list">
          <div></div>
        </section>

        <section id="filter">
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default App;
