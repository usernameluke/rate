import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Browse() {
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
    <>
      <h3 className="cinzel-500 text-2xl row-title">Top-Rated Films</h3>
      <swiper-container
        slides-per-view="3"
        space-between="10"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {movies.map((item) => {
          return (
            <swiper-slide key={item.id}>
              <Link to={`/info/${item.id}`}>
                    <img src={item.src} alt={item.alt} className="poster" />
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
}
