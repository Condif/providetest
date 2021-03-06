export const getAllEpisodes = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_ALL_EPISODES_REQUEST" });

    try {
      await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({type:"SORT_EPISODES", sortedList: data.data})
          dispatch({
            type: "FETCH_ALL_EPISODES_SUCCESS",
            episodes: data.data,
          })
        });
    } catch (error) {
      dispatch({ type: "FETCH_ALL_EPISODES_FAILURE", error });
    }
  };
};

export const sortEpisodes = (anchor, allEpisodes) => {
  if (anchor === "release-date") {
    const sortedList = allEpisodes
      .slice()
      .sort(
        custom_sort
      );
    return { type: "SORT_EPISODES", sortedList };
  } else {
    const sortedList = allEpisodes
      .slice()
      .sort((a, b) => a.fields.episode - b.fields.episode);
    return { type: "SORT_EPISODES", sortedList };
  } 
};

const custom_sort = (a, b) => {
  return new Date(b.fields.release_date).getTime() - new Date(a.fields.release_date).getTime();
}

export const setSearchTerm = (searchTerm) => {
  return { type: "SET_SEARCH_TERM", searchTerm };
};

export const setEpisode = (episode) => {
  return { type: "SET_EPISODE", episode };
};
