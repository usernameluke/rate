import { useState } from "react";
import { MdOutlineCreate } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";

export const GenreModal = () => {
  const [showGenre, setShowGenre] = useState(false);
  // const [genre, setGenre] = useState("");

  return (
    <>
      <button className="watchlist-btn cinzel-400 text-white text-sm " onClick={() => setShowGenre(!showGenre)}>
        {showGenre ? "Add to Watchlist" : "Add to Watchlist"}
      </button>
      {showGenre && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content cinzel-400">
              <div className="modal-option modal-circle"><IoIosAddCircleOutline className="modal-icon" />Want to Watch </div>
              <div className="modal-option modal-circle"><IoIosAddCircleOutline className="modal-icon"/>Watching</div>
              <div className="modal-option modal-circle"><IoIosAddCircleOutline className="modal-icon"/>Watched</div>
              
              <div className="modal-option 
              modal-circle"><MdOutlineCreate className="modal-icon"/>  Custom List</div>
              
              <div className="modal-option modal-circle"><FaRegCommentDots className="modal-icon"/>Comment</div>
            </div>
            <div className="modal-footer">
              <button
                className="modal-cancel text-black cinzel-400"
                type="button"
                onClick={() => setShowGenre(!showGenre)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
