// export const getAllEpisodes =  () => {
//   return async (dispatch, getState) => {
//     await fetch("data.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         dispatch( {
//           type: "FETCH_ALL_EPISODES_REQUEST",
//           episodes: data.data
//         })
//       });
//   }
// };

export const getAllEpisodes = () => {
  return async (dispatch, getState) => {
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
          dispatch({
            type: "FETCH_ALL_EPISODES_SUCCESS",
            episodes: data.data,
          });
        });
    } catch (error) {
      dispatch({ type: "FETCH_ALL_EPISODES_FAILURE", error });
    }
  };
};
