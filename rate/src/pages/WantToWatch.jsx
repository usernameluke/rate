import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Info from "../components/Info";

export function WantToWatch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=6addbdd2457d4d8d9a03e850cef564d7"
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="watchlist-page">
      <header className="watchlist-header">
        <select
          id="watchlist"
          name="watchlist"
          className="watchlist text-1xl cinzel-500 text-white"
        >
          <option
            value="wanttowatch"
            className="text-1xl cinzel-500 text-black"
          >
            Want to Watch
          </option>
          <option value="watching" className="text-1xl cinzel-500 text-black">
            Watching
          </option>
          <option value="watched" className="text-1xl cinzel-500 text-black">
            Watched
          </option>
        </select>
        <nav className="watchlist-menu cinzel-400 text-white">
          <a href="#all">All</a>
          <a href="#movies">Movies</a>
          <a href="#series">Series</a>
        </nav>
        <nav className="watchlist-menu cinzel-400 text-white">
          <a href="#all">Genre</a>
          <a href="#movies">Rating</a>
          <a href="#series">Director</a>
          <a href="#series">Year</a>
        </nav>
      </header>

      <main className="watchlist-main">
        <swiper-container
          slides-per-view="4"
          space-between="10"
          scrollbar-clickable="true"
          mousewheel-invert="true"
          direction="vertical"
          className="watchlist-main"
        >
          {movies.map((item) => {
            return (
              <swiper-slide key={item.id}>
                <Link to={`/info/${item.id}`}>
                  <div className="watchlist-row">
                    <div className="watchlist-img">
                      <img src={item.src} alt={item.alt} className="poster" />
                    </div>
                    <div className="watchlist-info cinzel-500 text-white">
                      <p>{item.title}</p>
                    </div>
                  </div>
                  //{" "}
                </Link>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </main>
      <footer className="watchlist-footer">
        <p className="cinzel-500 text-white">Meow</p>
      </footer>
    </div>
  );
}
