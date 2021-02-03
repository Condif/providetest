import React, { useState } from "react";
import "./Episodes.css";

const Episode_list = (props) => {
  const {sortedEpisodes, searchTerm, pickEpisodeHandler} = props
  

  
  
  return (
      <div className="EpisodeList">
        {sortedEpisodes.filter((episodes) => {
          if(searchTerm === "") {
            return episodes
          } else if (episodes.fields.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return episodes
          }else
          return ""
        }).map((episode) => {
          return (
            <button
              onClick={() => pickEpisodeHandler(episode)}
              key={episode.id}
            >
              Avsnitt: {episode.fields.episode}. Titel: {episode.fields.title}.
              Utgivningsdatum: {episode.fields.release_date}.
            </button>
          );
        })}
      </div>
  );
};
export default Episode_list;
