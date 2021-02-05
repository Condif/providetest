import React from "react";
import "./Episodes.css";
import {useSelector} from "react-redux"

const EpisodeInfo = () => {
  const selectedEpisode = useSelector(state => state.episode.selectedEpisode)
  return (
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
  );
};
export default EpisodeInfo;
