import "./App.css";
import React, { useEffect } from "react";
import Home from "./components/views/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Series from "./components/views/Series";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes } from "./actions/EpisodeActions";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  
  const renderApp = () => {
    if (loading) {
      return <h1>Loading</h1>;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact strict path="/" component={Home} />
          <Route path="/series" component={Series} />
        </div>
      </BrowserRouter>
    );
  };

  
  useEffect( ()  => {
    if(!localStorage.getItem('state')) {
      dispatch(getAllEpisodes())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>{renderApp()}</div>;
};

export default App;
