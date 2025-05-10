import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {

  const { specificId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, [specificId]);
  //  do a call to the api to get the movie with the id specificId
const fetchInfo = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${specificId}
?api_key=6addbdd2457d4d8d9a03e850cef564d7`
    );
    const data = await response.json();
    console.log(data)
    setMovie(data);
  };

  // display the content

  return (
    <>
      <div id="info" className="info-page cinzel-500 text-white">
        <div className="info-page-top">
          <div className="info-flex">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="ShawShank"
              className="info-poster"
            />
            <h3 className="text-xl text-center font-bold text-red">
              {movie.original_title} <hr />
            </h3>
            <div className="info-row">
              <p className="info text-white text-xs">{movie.release_date}</p>
              <p className="info text-white text-xs">{Math.round(movie.vote_average * 10)}/100</p>
            </div>
          </div>
        </div>

        <div className="info-page-mid">
          <h5 className="text-xs info-description">
            {movie.overview}
          </h5>
        </div>

        <div className="info-btn-container">
          <button className="info-btn text-white cinzel-500 text-sm">
            Added to Watchlist
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default Info;
