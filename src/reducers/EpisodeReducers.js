const initialState = {
  allEpisodes: [],
  loading: false,
  error: null,
  searchTerm: "",
  selectedEpisode: []
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

      case "SORT_EPISODES":
        return {
          ...state,
          allEpisodes: action.sortedList
        };
      case "SET_SEARCH_TERM": 
        return {
          ...state,
          searchTerm: action.searchTerm
        }
      case "SET_EPISODE":
        return {
          ...state,
          selectedEpisode: [action.episode]
        }
    default:
      return state;
  }
};
