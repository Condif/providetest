const initialState = {
  allEpisodes: [],
  loading: false,
  error: null,
};

export const episodeReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_EPISODES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_ALL_EPISODES_SUCCESS":
      return { ...state, loading: false, allEpisodes: action.episodes };

    case "FETCH_ALL_EPISODES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        allEpisodes: [],
      };

    default:
      return state;
  }
};
