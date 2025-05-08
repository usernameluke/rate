import { MdOutlineDelete } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { useParams } from "react-router-dom";

export function Info({ data }) {
  const { specificId } = useParams();
  const currentData = data.filter(
    (info) => parseInt(info.id) === parseInt(specificId)
  );

  return (
    <>
      {currentData.map((item) => {
        return (
          <div id="info" className="info-page cinzel-500 text-white" key={item.id}>
            <div className="info-page-top">
              <div className="info-flex">
                <img src={item.src} alt={item.alt} className="info-poster" />
                <h3 className="text-xl text-center font-bold text-red">
                  {item.title}
                </h3>
                <div className="info-row">
                  <p className="text-red-500 text-xs">{item.status}</p>
                  <p className="text-red-500 text-xs">{item.rating}</p>
                  <p className="text-red-500 text-xs">{item.media}</p>
                </div>
              </div>
            </div>

            <div className="info-page-mid">
              <h5 className="info-description text-sm text-red-500">
                Description
              </h5>
              <h5 className="text-xs italic info-description">
                {item.overview}
              </h5>
            </div>

            <div className="info-btn-container">
              <button className="info-btn text-white cinzel-500 text-sm">
                Added to Watchlist
              </button>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
}
