import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Browse() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
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
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  return (
    <>
      <h3 className="cinzel-500 text-2xl row-title">Top-Rated Films</h3>
      <ul className="rating-row cinzel-400 text-1xl row-title">
        <li className="text-white">Rating:</li>
        <li className="rating text-white" onClick={() => handleFilter(7)}>
          71-79
        </li>
        <li className="rating text-white" onClick={() => handleFilter(8)}>
          80-89
        </li>
        <li className="rating text-white" onClick={() => handleFilter(9)}>
          90-100
        </li>
      </ul>
      <swiper-container
        slides-per-view="4"
        space-between="10"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {filterMovies.map((item) => {
          return (
            <swiper-slide key={item.id}>
              <Link to={`/info/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.alt}
                  className="poster"
                />
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
}
