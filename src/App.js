import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import EpisodeList from "./components/Episodes/EpisodeList.js";
import EpisodeInfo from "./components/Episodes/EpisodeInfo.js";
// import data from "./dummy";

function App() {
  const [data, setData] = useState([]);
  const [sortedEpisodes, setSortedEpisodes] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState();
  const sortEpisodeHandler = (anchor) => {
    if (anchor === "release-date") {
      const sortedList = data
        .slice()
        .sort(
          (a, b) =>
            b.fields.release_date.substr(6, 9) -
            a.fields.release_date.substr(6, 9)
        );
      setSortedEpisodes(sortedList);
    } else if (anchor === "episode") {
      const sortedList = data
        .slice()
        .sort((a, b) => a.fields.episode - b.fields.episode);
      setSortedEpisodes(sortedList);
    } else {
      setSortedEpisodes(data);
    }
  };

  const setSearchTermHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  const pickEpisodeHandler = (episode) => {
    setSelectedEpisode([episode]);
  };

  const getData = () => {
    const timer = setTimeout(() => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setDataHandler(data);
        });
      
    }, 1000);
    return () => clearTimeout(timer);
    
  };

  const setDataHandler = (newData) => {
    console.log(newData.data + "newData");
    setData(newData.data);
    console.log(data);
  };

  useEffect(() => {
    getData();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
