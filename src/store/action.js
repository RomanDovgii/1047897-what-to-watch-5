import {ActionType} from "../utils/const";

export const ActionCreator = {
  changeGenre: (selectedGenre) => ({
    type: ActionType.SELECT_GENRE,
    payload: selectedGenre
  })
};
