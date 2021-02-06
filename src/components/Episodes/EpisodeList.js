import React  from "react";
import "./Episodes.css";
import {useSelector, useDispatch} from "react-redux"
import {setEpisode} from "../../actions/EpisodeActions"

const EpisodeList = () => {
  const dispatch = useDispatch()
  const allEpisodes = useSelector(state => state.episode.allEpisodes)
  const searchTerm = useSelector(state => state.episode.searchTerm)

  const pickEpisodeHandler = (episode) => {
    dispatch(setEpisode(episode))
  };

  return (
    <div className="EpisodeList">
      {allEpisodes !== undefined && allEpisodes
        .filter((episodes) => {
          if (searchTerm === "") {
            return episodes;
          } else if (
            episodes.fields.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return episodes;
          } else return "";
        })
        .map((episode) => {
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
export default EpisodeList;
