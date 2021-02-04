const initialState = {
    allEpisodes: []
}

export const episodeReducers = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_EPISODES":
          return { ...state, allEpisodes: action.episodes };
        default:
          return state;
      }
}