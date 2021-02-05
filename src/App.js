import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Series from "./components/views/Series";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes, sortEpisodes } from "./actions/EpisodeActions";


const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const allEpisodes = useSelector((state) => state.episode.allEpisodes);
  const searchTerm = useSelector((state) => state.episode.searchTerm);

  const handleGetAllEpisodes = () => {
    dispatch(getAllEpisodes());
  };

  const handleSetSortedEpisodes = () => {
    dispatch(sortEpisodes(searchTerm, allEpisodes));
  }

  const renderApp = () => {
    if (state.loading) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="App">
        <Navbar />
        <Series />
      </div>
    );
  };

  useEffect(() => {
    handleGetAllEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleSetSortedEpisodes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allEpisodes]);

  return <div>{renderApp()}</div>;
};

export default App;
