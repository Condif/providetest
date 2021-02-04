import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {toggleAuth} from "../../actions/SessionActions"

const Navbar = (props) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { sortEpisodeHandler, setSearchTermHandler } = props;

  const loginHandler = () => {
    dispatch(toggleAuth())
  }

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
