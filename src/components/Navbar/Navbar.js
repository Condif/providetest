import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const { sortEpisodeHandler, setSearchTermHandler } = props;
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
      <div className="RightNavGroup">
        <ul className="searchInputUl">
          <li >
            <input type="text" className="searchInput" placeholder="Sök på titel..." onChange={(event) => setSearchTermHandler(event)}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
