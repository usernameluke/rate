import {Link} from "react-router-dom"
import { ToSee } from "./ToSee";

export function Watchlist({ data }) {
  return (
    <>
      <h2 className="text-2xl text-white row-title">Watchlist</h2>
      <Link to="/watchlist/toSee">
      <h3 className="row-title">Plan to watch</h3>
      </Link>
      
      <swiper-container
        slides-per-view="3"
        space-between="10"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {data.map((item) => {
          return (
            <swiper-slide key={item.id}>
              <Link to={`/info/${item.id}`}>
                <img src={item.src} alt={item.alt} className="poster" />
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
      <h3 className="row-title">Seeing</h3>
      <swiper-container
        slides-per-view="3"
        space-between="10"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {data.map((item) => {
          return (
            <swiper-slide key={item.id}>
              <Link to={`/info/${item.id}`}>
                <img src={item.src} alt={item.alt} className="poster" />
              </Link>
            </swiper-slide>
          );
        })}
      </swiper-container>
      <h3 className="row-title">Seen</h3>
      <swiper-container
        slides-per-view="3"
        space-between="10"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {data.map((item) => {
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
