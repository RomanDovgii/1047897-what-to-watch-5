import {ActionType} from "../utils/const";

export const ActionCreator = {
  changeGenre: (selectedGenre) => {
    return {
      type: ActionType.SELECT_GENRE,
      payload: selectedGenre
    };
  }
};
