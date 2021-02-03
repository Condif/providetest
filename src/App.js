import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar.js'
import Episodes from './components/Episodes/Episodes.js'
import data from "./dummy";

function App() {
  const [sortedEpisodes, setSortedEpisodes] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
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
  return (
    <div className="App">
        <Navbar setSearchTermHandler={setSearchTermHandler} sortEpisodeHandler={sortEpisodeHandler}/>
        <Episodes searchTerm={searchTerm} sortedEpisodes={sortedEpisodes}/>
    </div>
  );
}

export default App;
