import { MdOutlineDelete } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { useParams } from "react-router-dom";

export function Info({ data }) {
  const { specificId } = useParams();
  const currentData = data.filter(
    (info) => parseInt(info.id) === parseInt(specificId)
  );
  console.log(data);

  return (
    <>
      {currentData.map((item) => {
        console.log(item);
        return (
          <div className="info-page">
            <div className="info-page-top bg-gray-50">
              <div className="info-flex" key={item.id}>
                <img src={item.src} alt={item.alt} className="info-poster" />
                <div className="info-flex-column">
                  <h3 className="font-sans font-bold text-xl">{item.title}</h3>
                  <div className="flex justify-start align-center gap-5">
                    <p className="font-sans text-grey-200 opacity-80 italic">
                      Status
                    </p>{" "}
                    <p className="font-sans">{item.status}</p>
                  </div>
                  <div className="flex justify-start align-center gap-5">
                    <p className="font-sans text-grey-200 opacity-80 italic">Rating</p> <p className="font-sans">{item.rating}</p>
                  </div>
                  <div className="flex-col justify-start align-center gap-5">
                    <p className="font-sans text-grey-200 opacity-80 italic">Platform</p>
                    <div className="">
                    <p className="font-sans">{item.media}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-page-mid bg-gray-50">
              <h5 className="info-description font-sans font-bold text-l text-black">Description:</h5>
              <h5 className="text-sm text-black info-description">{item.overview}</h5>
            </div>

            <div className="info-buttons">
              <div className="info-col">
                <button className="info-btn info-icon">
                  <img
                    className="info-img-popcorn"
                    src="\src\images\ToWatch.png"
                    alt="To watch"
                  />
                </button>
                <h6 className="text-xs text-white">Watch</h6>
              </div>
              <div className="info-col">
                <button className="info-btn info-icon">
                  <img
                    className="info-img-watching"
                    src="\src\images\Watching.png"
                    alt="Watching"
                  />
                </button>
                <h6 className="text-xs text-white">Watching</h6>
              </div>
              <div className="info-col">
                <button className="info-btn info-icon">
                  <img
                    className="info-img-watched"
                    src="\src\images\Watched.png"
                    alt="Watched"
                  />
                </button>
                <h6 className="text-xs text-white">Watched</h6>
              </div>
              <div className="info-col">
                <button className="info-btn info-icon">
                  <MdOutlineDelete className="info-img" />
                </button>
                <h6 className="text-xs text-white">Delete</h6>
              </div>
              <div className="info-col">
                <button className="info-btn info-icon">
                  <FaRegCommentDots className="info-img" />
                </button>
                <h6 className="text-xs text-white">Comment</h6>
              </div>
            </div>
          </div>
        );
      })};
    </>
  );
}
