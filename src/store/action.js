import {ActionType, SHOWN_MOVIES_COUNT} from "../utils/const";

export const ActionCreator = {
  changeGenre: (selectedGenre) => {
    return {
      type: ActionType.SELECT_GENRE,
      payload: selectedGenre
    };
  },
  showMore: () => {
    return {
      type: ActionType.SHOW_MORE,
      payload: SHOWN_MOVIES_COUNT
    };
  },
  resetShownMovies: () => {
    return {
      type: ActionType.RESET_SHOWN_MOVIES
    };
  },
  startPlaying: () => {
    return {
      type: ActionType.START_PLAYING
    };
  },
};
