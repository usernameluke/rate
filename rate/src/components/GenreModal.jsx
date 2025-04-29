import React from "react";
import { useState } from "react";

export const GenreModal = () => {
  const [showGenre, setShowGenre] = useState(false);
  // const [genre, setGenre] = useState("");

  return (
    <>
      <button className="choice" onClick={() => setShowGenre(!showGenre)}>
        {showGenre ? "Genre" : "Genre"}
      </button>
      {showGenre && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <div className="modal-option">Action</div>
              <div className="modal-option">Anime</div>
              <div className="modal-option">Comedies</div>
              <div className="modal-option">Dramas</div>
              <div className="modal-option">Fantasy</div>
              <div className="modal-option">Horror</div>
              <div className="modal-option">Romance</div>
              <div className="modal-option">Sci-Fi</div>
              <div className="modal-option">Thrillers</div>
            </div>
            <div className="modal-footer">
              <button
                className="modal-cancel"
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
