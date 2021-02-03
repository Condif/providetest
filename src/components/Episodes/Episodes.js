import React, { useState } from "react";
import "./Episodes.css";

const Episodes = (props) => {
  const [selectedEpisode, setSelectedEpisode] = useState();
  const {sortedEpisodes, searchTerm} = props
  

  const pickEpisodeHandler = (episode)  => {
    setSelectedEpisode([episode]);
  }
  
  return (
    <div className="Episodes">
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
      <div className="EpisodeInfo">
        {selectedEpisode !== undefined ? (
          selectedEpisode.map((episode) => {
            return (
              <div key={episode.id}>
                <h3>Titel: {episode.fields.title}</h3>
                <h3>Regissör: {episode.fields.director}</h3>
                <h3>Beskrivning</h3>
                <p>{episode.fields.description} </p>
                <h3>Utgivningsdatum: {episode.fields.release_date}</h3>
              </div>
            );
          })
        ) : (
          <h3>Inget avsnitt valt</h3>
        )}
      </div>
    </div>
  );
};
export default Episodes;
