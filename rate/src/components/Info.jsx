const Info = ({ movie }) => {
  return (
    <>
      <div id="info" className="info-page cinzel-500 text-white">
        <div className="info-page-top">
          <div className="info-flex">
            <img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpLIvbvkKxwW5QMfY025kVAN9O5WH3URdEu7Dfiau3QSBZHZdxfsi1Yn-pV11MLBLp1KEMnjjteUQskCBJJmk-9cuX_kIfv9WrIyxJTn_RTuM-EnJj_NlRBw"
              alt="ShawShank"
              className="info-poster"
            />
            <h3 className="text-xl text-center font-bold text-red">
              {movie.original_title} <hr />
            </h3>
            <div className="info-row">
              <p className="info text-white text-xs">{movie.release_date}</p>
              <p className="info text-white text-xs">{movie.rate_average}</p>
            </div>
          </div>
        </div>

        <div className="info-page-mid">
          {/* <h5 className="text-xs info-description">
            {movie.overview.slice(0, 100) + "..."}
          </h5> */}
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