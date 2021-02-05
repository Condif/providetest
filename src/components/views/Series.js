import React from "react";
import EpisodeList from "../Episodes/EpisodeList.js";
import EpisodeInfo from "../Episodes/EpisodeInfo.js";

const Series = () => {
  return (
    <div className="Episodes">
      <EpisodeList />
      <EpisodeInfo />
    </div>
  );
};

export default Series;
