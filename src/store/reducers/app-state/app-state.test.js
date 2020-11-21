import {appState} from "./app-state";
import {ActionType, SHOWN_MOVIES_COUNT} from "../../../utils/const";

const testError = {
  data: {
    error: `random text`
  },
  status: 505
};

it(
    `Reducer without additional parameters returns initial state`,
    () => {
      expect(appState(void 0, {}))
      .toEqual({
        shownMoviesCount: SHOWN_MOVIES_COUNT,
        isPlayerPlaying: false,
        isAuthError: false,
        isError: false,
        error: {}
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

it(
    `Reducer with ActionType.START_PLAYING changes isPlayerPlaying from true to false`,
    () => {
      expect(appState(
          {
            isPlayerPlaying: true
          },
          {
            type: ActionType.START_PLAYING
          }
      ))
      .toEqual({
        isPlayerPlaying: false
      });
    }
);

it(
    `Reducer with ActionType.START_PLAYING changes isPlayerPlaying from false to true`,
    () => {
      expect(appState(
          {
            isPlayerPlaying: false
          },
          {
            type: ActionType.START_PLAYING
          }
      ))
      .toEqual({
        isPlayerPlaying: true
      });
    }
);

it(
    `Reducer with ActionType.THROW_ERR changes isAuthError from false to true`,
    () => {
      expect(appState(
          {
            isAuthError: false
          },
          {
            type: ActionType.THROW_ERR
          }
      ))
      .toEqual({
        isAuthError: true
      });
    }
);

it(
    `Reducer with ActionType.THROW_ERR doesn't change isAuthError from true to false`,
    () => {
      expect(appState(
          {
            isAuthError: true
          },
          {
            type: ActionType.THROW_ERR
          }
      ))
      .toEqual({
        isAuthError: true
      });
    }
);

it(
    `Reducer with ActionType.REMOVE_ERR changes isAuthError from true to false`,
    () => {
      expect(appState(
          {
            isAuthError: true
          },
          {
            type: ActionType.REMOVE_ERR
          }
      ))
      .toEqual({
        isAuthError: false
      });
    }
);

it(
    `Reducer with ActionType.REMOVE_ERR doesn't change isAuthError from false to true`,
    () => {
      expect(appState(
          {
            isAuthError: false
          },
          {
            type: ActionType.REMOVE_ERR
          }
      ))
      .toEqual({
        isAuthError: false
      });
    }
);

it(
    `Reducer with ActionType.CREATE_ERR updated error info`,
    () => {
      expect(appState(
          {
            isError: false,
            error: {}
          },
          {
            type: ActionType.CREATE_ERR,
            payload: testError
          }
      ))
      .toEqual({
        isError: true,
        error: {
          text: testError.data.error,
          code: testError.status
        }
      });
    }
);

it(
    `Reducer with ActionType.FLUSH_ERR flushes error info`,
    () => {
      expect(appState(
          {
            isError: true,
            error: {
              text: testError.data.error,
              code: testError.status
            }
          },
          {
            type: ActionType.FLUSH_ERR,
          }
      ))
      .toEqual({
        isError: false,
        error: {}
      });
    }
);

it(
    `Reducer with ActionType.FLUSH_ERR doesn't change isError because it is correct`,
    () => {
      expect(appState(
          {
            isError: false,
            error: {
              text: testError.data.error,
              code: testError.status
            }
          },
          {
            type: ActionType.FLUSH_ERR,
          }
      ))
      .toEqual({
        isError: false,
        error: {}
      });
    }
);
