import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function WantToWatch() {
  const [movies, setMovies] = useState([]);

  const [minRating, setMinRating] = useState(0);

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

  const handleFilter = (rate) => {
    setMinRating(rate);

    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setMovies(filtered);
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
          <select name="rating" id="Rating">
            <option value="nothing">Rating</option>
            <option
              onClick={() => handleFilter(9)}
              className="text-black"
              value="90-100"
            >
              90-100
            </option>

            <option
              onClick={() => handleFilter(8)}
              className="text-black"
              value="80-89"
            >
              80-89
            </option>
            <option
              onClick={() => handleFilter(7)}
              className="text-black"
              value="71-79"
            >
              71-79
            </option>
          </select>
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
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        alt={item.alt}
                        className="poster"
                      />
                    </div>
                    <div className="watchlist-info cinzel-500 text-white text-sm">
                      <p>{item.title}</p>
                      <p>{Math.round(item.vote_average * 10)}/100</p>
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
        <p className="cinzel-500 text-white"></p>
      </footer>
    </div>
  );
}
