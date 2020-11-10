import {AuthorizationStatus, ActionType} from "../../../utils/const";
import {extend} from "../../../utils/utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userId: ``,
  avatarUrl: ``
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(
          state,
          {
            authorizationStatus: action.payload
          }
      );

    case ActionType.UPDATE_USER_INFO:
      return extend(
          state,
          {
            userId: action.payload.userId,
            avatarUrl: action.payload.avatarUrl
          }
      );
  }

  return state;
};

export {user};
