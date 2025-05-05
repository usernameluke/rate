// import { useState } from "react";
import { useState } from "react";
import { GenreModal } from "./GenreModal";
import { SliderModal } from "./SliderModal";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FiTv } from "react-icons/fi";
import { GiFilmProjector } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";
import { MdStarRate } from "react-icons/md";
import { FaPersonHalfDress } from "react-icons/fa6";
import { CiStreamOn } from "react-icons/ci";
import { GiDirectorChair } from "react-icons/gi";
import { RiNewsLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Navbar() {
  const [header, setHeader] = useState(false);

  const showHeader = () => setHeader(!header);

  // const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-firstrow">
          <div className="nav-left">
            <Link to="#" className="menu-logo">
              <img
                src="src\images\logo.png"
                alt="R8+ logo"
                className="logo-icon"
                onClick={showHeader}
              />
            </Link>
          </div>
          <div className="nav-right">
            <div className="search" onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? (
                <IoIosCloseCircleOutline className="nav-icon icon" />
              ) : (
                <FaMagnifyingGlass className="nav-icon icon" />
              )}
            </div>
            {showSearch && (
              <form className="search-form bg-white rounded-xl">
                <input
                  type="search"
                  placeholder="Search here..."
                  className="search-input text-sm"
                />
              </form>
            )}

            <Link to="/watchlist">
              <IoHome className="nav-icon icon" />
            </Link>
            <IoPersonOutline className="nav-icon icon" />
          </div>
        </div>
        <nav className={header ? "nav-menu active z-10" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showHeader}>
            <div className="menu-row">
              <div>
                <img
                  src="src\images\logo-red.png"
                  alt="R8+ logo"
                  className="red-logo"
                />
              </div>
              <div>
                <Link to="#" className="navbar-toggle icon menu-logo">
                  <IoIosCloseCircleOutline className="menu-close" />
                </Link>
              </div>
            </div>
            <li className="navbar-item">
              <Link to="/series">
                <FiTv className="icon" />
                <span className="cinzel-400">Series</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/films">
                <GiFilmProjector className="icon" />
                <span className="cinzel-400">Films</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/genre">
                <TfiVideoClapper className="icon" />
                <span className="cinzel-400">Genre</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/rating">
                <MdStarRate className="icon" />
                <span className="cinzel-400">Rating</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/platform">
                <CiStreamOn className="icon" />
                <span className="cinzel-400">Platform</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/cast">
                <FaPersonHalfDress className="icon" />
                <span className="cinzel-400">Cast</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/director">
                <GiDirectorChair className="icon" />
                <span className="cinzel-400">Director</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/year">
                <RiNewsLine className="icon" />
                <span className="cinzel-400">Year</span>
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">
                <FaPhoneAlt className="icon" />
                <span className="cinzel-400">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* 
    <div className="navbar-secondrow">
      <div className="choice-bar">
        <button className="choice">Films</button>
        <GiFilmProjector className="icon"/>
        <GenreModal />
        <SliderModal />
      </div>
    </div>     */}
    </>
  );
}
