import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {login, checkAuth} from "../../actions/api-actions";
import {ActionType, APIRoute, AppRoute, AuthorizationStatus} from "../../../utils/const";

const api = createAPI(() => {});

it(
    `Reducer without additional parameters returns initial state`,
    () => {
      expect(user(void 0, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userId: ``,
        avatarUrl: ``
      });
    }
);

it(
    `Reducer should update authorizationStatus to "auth"`,
    () => {
      expect(user(
          {
            authorizationStatus: AuthorizationStatus.NO_AUTH
          },
          {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH
          }
      ))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH
      });
    }
);

describe(
    `Async operation works correctly`,
    () => {
      it(
          `Should make a correct API call to /login through check authorization`,
          () => {
            const apiMock = new MockAdapter(api);
            const dispatch = jest.fn();
            const testCheckAuth = checkAuth();

            apiMock
              .onGet(APIRoute.LOGIN)
              .reply(200, [{fake: true}]);

            return testCheckAuth(dispatch, () => {}, api)
              .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                  type: ActionType.REQUIRED_AUTHORIZATION,
                  payload: AuthorizationStatus.AUTH
                });
              });
          }
      );

      it(`Should make a correct API call to /login through login`,
          () => {
            const apiMock = new MockAdapter(api);
            const dispatch = jest.fn();
            const testLogin = login({login: `test@tester.com`, password: `123456`});

            apiMock
              .onPost(APIRoute.LOGIN)
              .reply(200, [{fake: true}]);

            return testLogin(dispatch, () => {}, api)
              .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(4);
                expect(dispatch).toHaveBeenNthCalledWith(1, {
                  type: ActionType.UPDATE_USER_INFO,
                  payload: {
                    userId: undefined,
                    avatarUrl: undefined
                  }
                });
                expect(dispatch).toHaveBeenNthCalledWith(2, {
                  type: ActionType.REQUIRED_AUTHORIZATION,
                  payload: AuthorizationStatus.AUTH
                });
                expect(dispatch).toHaveBeenNthCalledWith(3, {
                  type: ActionType.REMOVE_ERR
                });
                expect(dispatch).toHaveBeenNthCalledWith(4, {
                  type: ActionType.REDIRECT_TO_ROUTE,
                  payload: AppRoute.MAIN
                });
              });
          }
      );
    }
);
