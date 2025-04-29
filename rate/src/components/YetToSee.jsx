export function YetToSee({ data }) {
  return (
    <>
      <h3 className="row-title">Watchlist</h3>
      <swiper-container slides-per-view="3" space-between="10" scrollbar-clickable="true" mousewheel-invert="true">
        {data.map((item) => {
          return (
            <swiper-slide key={item.id}>
              <img src={item.src} alt={item.alt} className="poster" />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
};