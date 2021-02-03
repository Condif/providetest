import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import EpisodeList from "./components/Episodes/EpisodeList.js";
import EpisodeInfo from "./components/Episodes/EpisodeInfo.js";

function App() {
  const [allEpisodes, setAllEpisodes] = useState();
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

  const getData = async () => {
      await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setDataHandler(data)
        });
  };

  const setDataHandler = (newData) => {
    setAllEpisodes(newData.data);
  };

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSortedEpisodes(allEpisodes)
  }, [allEpisodes]);

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
}

export default App;
