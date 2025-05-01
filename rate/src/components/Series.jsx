import {Link} from "react-router-dom"

export function Series({ data }) {
  return (
    <>
      <h3 className="row-title">Series</h3>
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
