export const getAllEpisodes =  () => {
  return async (dispatch, getState) => {
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
        dispatch( {
          type: "FETCH_ALL_EPISODES",
          episodes: data.data
        })
      });
  }
};
