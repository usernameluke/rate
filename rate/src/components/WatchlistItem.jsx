import { useEffect, useState } from "react";

export function WatchlistItem({ specificId, type }) {
  const [watchlistItem, setWatchlistItem] = useState([]);
  const [title, setTitle] = useState([]);

  let endpointType = "tv";
  if (type === "film") {
    endpointType = "movie";
  }

  useEffect(() => {
    fetchWatchlistItem();
  }, [specificId]);

  const fetchWatchlistItem = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${endpointType}/${specificId}
?api_key=6addbdd2457d4d8d9a03e850cef564d7`
    );
    const data = await response.json();
    //console.log(data)
    if (type === "movie" || type === "film") {
      setTitle(data.title);
    } else if (type === "show" || type === "tv") {
      console.log(type);
      setTitle(data.name);
    } else {
      console.log("Type", type);
      //console.log(data)
    }
    // if type === film -> setTitle(item.title)
    // if type === tv -> setTitle(item.name)
    setWatchlistItem(data);
  };

    const deleteItem = (specificId) => {
    const copyList = structuredClone(cards);
    const filter = copyList.filter((todo) => todo.id !== id);
    setCards(filter);
  }

  return (
    <div className="watchlist-row">
      <div className="watchlist-img">
        <img
          src={`https://image.tmdb.org/t/p/w500${watchlistItem.poster_path}`}
          alt={watchlistItem.alt}
          className="poster"
        />
      </div>
      <div className="watchlist-info cinzel-500 text-white text-sm">
        <p>{title}</p>
        <p>{Math.round(watchlistItem.vote_average * 10)}/100</p>
      </div>
      <div className="watchlist-delete">
        <button className="RemoveButton" onClick={() => deleteItem(item.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
}
