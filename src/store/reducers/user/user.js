import {AuthorizationStatus, ActionType} from "../../../utils/const";
import {extend} from "../../../utils/utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
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
  }

  return state;
};

export {user};
