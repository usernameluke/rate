import { Link } from "react-router-dom";

export function WantToWatch({ data }) {
  return (
    <div className="watchlist-page">
      <header className="watchlist-header">
        <h2 className="text-2xl cinzel-500 text-white row-title">
          Want to Watch
        </h2>
        <nav className="watchlist-menu cinzel-400 text-white">
          <a href="#all">All</a>
          <a href="#movies">Movies</a>
          <a href="#series">Series</a>
          <a href="#filter">Filter</a>
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
          {data.map((item) => {
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
