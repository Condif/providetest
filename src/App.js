import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import EpisodeList from "./components/Episodes/EpisodeList.js";
import EpisodeInfo from "./components/Episodes/EpisodeInfo.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes } from "./actions/EpisodeActions";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const allEpisodes = useSelector((state) => state.episode.allEpisodes);
  const [sortedEpisodes, setSortedEpisodes] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState();
  const sortEpisodeHandler = (anchor) => {
    if (anchor === "release-date") {
      const sortedList = allEpisodes
        .slice()
        .sort(
          (a, b) =>
            b.fields.release_date.substr(6, 9) -
            a.fields.release_date.substr(6, 9)
        );
      setSortedEpisodes(sortedList);
    } else if (anchor === "episode") {
      const sortedList = allEpisodes
        .slice()
        .sort((a, b) => a.fields.episode - b.fields.episode);
      setSortedEpisodes(sortedList);
    } else {
      setSortedEpisodes(allEpisodes);
    }
  };

  const setSearchTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  const pickEpisodeHandler = (episode) => {
    setSelectedEpisode([episode]);
  };

  const handleGetAllEpisodes = () => {
    dispatch(getAllEpisodes());
  };

  const renderApp = () => {
    if (state.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="App">
        <Navbar
          setSearchTermHandler={setSearchTermHandler}
          sortEpisodeHandler={sortEpisodeHandler}
        />
        <div className="Episodes">
          <EpisodeList
            searchTerm={searchTerm}
            sortedEpisodes={sortedEpisodes}
            pickEpisodeHandler={pickEpisodeHandler}
          />
          <EpisodeInfo selectedEpisode={selectedEpisode} />
        </div>
      </div>
    );
  };

  useEffect(() => {
    handleGetAllEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSortedEpisodes(allEpisodes);
  }, [allEpisodes]);

  return (
    <div>
      {renderApp()}
    </div>
  );
};

export default App;
