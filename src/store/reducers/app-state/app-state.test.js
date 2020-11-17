import {appState} from "./app-state";
import {ActionType, SHOWN_MOVIES_COUNT} from "../../../utils/const";

it(
    `Reducer without additional parameters returns initial state`,
    () => {
      expect(appState(void 0, {}))
      .toEqual({
        shownMoviesCount: SHOWN_MOVIES_COUNT,
        isPlayerPlaying: false,
        isAuthError: false
      });
    }
);

it(
    `Reducer with ActionType.SHOW_MORE should return SHOWN_MOVIES_COUNT * 2`,
    () => {
      expect(appState(
          {
            shownMoviesCount: SHOWN_MOVIES_COUNT
          },
          {
            type: ActionType.SHOW_MORE,
            payload: SHOWN_MOVIES_COUNT
          }
      ))
      .toEqual({
        shownMoviesCount: SHOWN_MOVIES_COUNT * 2
      });
    }
);

it(
    `Reducer with ActionType.RESET_SHOWN_MOVIES should return SHOWN_MOVIES_COUNT when shownMoviesCount is equal to SHOWN_MOVIES_COUNT * 2`,
    () => {
      expect(appState(
          {
            shownMoviesCount: SHOWN_MOVIES_COUNT * 2
          },
          {
            type: ActionType.RESET_SHOWN_MOVIES
          }
      ))
      .toEqual({
        shownMoviesCount: SHOWN_MOVIES_COUNT
      });
    }
);

it(
    `Reducer with ActionType.RESET_SHOWN_MOVIES should return SHOWN_MOVIES_COUNT when shownMoviesCount is equal to SHOW_MOVIES_COUNT * 3`,
    () => {
      expect(appState(
          {
            shownMoviesCount: SHOWN_MOVIES_COUNT * 3
          },
          {
            type: ActionType.RESET_SHOWN_MOVIES
          }
      ))
      .toEqual({
        shownMoviesCount: SHOWN_MOVIES_COUNT
      });
    }
);
