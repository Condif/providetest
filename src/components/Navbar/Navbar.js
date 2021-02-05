import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {toggleAuth} from "../../actions/SessionActions"
import {sortEpisodes, setSearchTerm} from "../../actions/EpisodeActions"

const Navbar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const allEpisodes = useSelector((state) => state.episode.allEpisodes);

  const loginHandler = () => {
    dispatch(toggleAuth())
  }

  const sortEpisodeHandler = (anchor) => {
    dispatch(sortEpisodes(anchor, allEpisodes))
  }

  const setSearchTermHandler = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <div className="Navbar">
      <ul className="leftNavGroup">
        <li>Sortera:</li>
        <li>
          <button onClick={() => sortEpisodeHandler("release-date")}>Datum</button>
        </li>
        <li>
          <button onClick={() => sortEpisodeHandler("episode")}>Avsnitt</button>
        </li>
      </ul>
      <div className="rightNavGroup"> 
        <ul className="searchInputUl">
          <li >
            <input type="text" className="searchInput" placeholder="Sök på titel..." onChange={(event) => setSearchTermHandler(event)}/>
          </li>
        </ul>
        <button onClick={loginHandler} >{isLoggedIn ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
