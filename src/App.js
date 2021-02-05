import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/views/Home";
import Navbar from "./components/Navbar/Navbar.js";
import Series from "./components/views/Series";
import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllEpisodes, sortEpisodes } from "./actions/EpisodeActions";


const App = () => {
  console.log("render");
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const allEpisodes = useSelector(state => state.episode.allEpisodes);
  const searchTerm = useSelector(state => state.episode.searchTerm);
  const [firstRender, setFirstRender] = useState(true)


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
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact strict path='/' component={Home}/>
          <Route path='/series' component={Series}/>
        </div>
      </BrowserRouter>
    );
  };

  useEffect(() => {
    // if(firstRender) {
    //   setFirstRender(false)
    //   return
    // } 
    dispatch(getAllEpisodes()).then(()=> {
      handleSetSortedEpisodes()
    })
    // handleSetSortedEpisodes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  // useEffect(() => {
  //   if(firstRender) {
  //     setFirstRender(false)
  //     return
  //   } 
    
  //   handleSetSortedEpisodes()
    
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [allEpisodes]);

  return ( <div>{renderApp()}</div>)
};

export default App;
