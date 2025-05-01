import { FaRegHeart } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { useParams } from "react-router-dom";

export function Info({ data }) {
  const { specificId } = useParams();
  const currentData = data.filter((info) => parseInt(info.id) === parseInt(specificId));
console.log(data)
  
  return (
    <>
      {currentData.map((item) => {
        console.log(item)
        return (
          <div className="info-page">
            <div className="info-flex" key={item.id}>
              <img src={item.src} alt={item.alt} className="info-poster" />
              <div className="info-flex-column">
                <h3 className="info-title">{item.title}</h3>
                <h5 className="info-status">Status: {item.status}</h5>
                <h5 className="info-rating">Rating: {item.rating}</h5>
                <h5 className="info-platform">Platform: {item.media}</h5>
                <h5 className="info-comment">Comments: {item.comments}</h5>
              </div>
            </div>
            <h5 className="info-description">Description:</h5>
            <h5 className="info-description">{item.overview}</h5>

            <div className="info-flex">
              <button className="info-btn info-icon">
                <FaRegHeart className="info-img" />
              </button>
              <button className="info-btn info-icon">
                <MdOutlineDelete className="info-img" />
              </button>
              <button className="info-btn info-icon">
                <FaRegCommentDots className="info-img" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
