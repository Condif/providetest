import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar.js'
import Episode_list from './components/Episodes/Episode_list.js'
import Episode_info from './components/Episodes/Episode_info.js'
import data from "./dummy";

function App() {
  const [sortedEpisodes, setSortedEpisodes] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState();
  const sortEpisodeHandler = (anchor)  => {
    if(anchor === "release-date") {
      const sortedList = data.slice().sort((a, b) => b.fields.release_date.substr(6, 9) - a.fields.release_date.substr(6, 9))
      setSortedEpisodes(sortedList)
    } else if (anchor === "episode") {
      const sortedList = data.slice().sort((a, b) => a.fields.episode - b.fields.episode)
      setSortedEpisodes(sortedList)
    } else  {
      setSortedEpisodes(data)
    }
  }

  const setSearchTermHandler = (event) => {
    setSearchTerm(event.target.value)
  }
  const pickEpisodeHandler = (episode)  => {
    setSelectedEpisode([episode]);
  }
  
  return (
    <div className="App">
        <Navbar setSearchTermHandler={setSearchTermHandler} sortEpisodeHandler={sortEpisodeHandler}/>
        <div className="Episodes">
          <Episode_list searchTerm={searchTerm} sortedEpisodes={sortedEpisodes} pickEpisodeHandler={pickEpisodeHandler} />
          <Episode_info selectedEpisode={selectedEpisode} />
        </div>
    </div>
  );
}

export default App;
