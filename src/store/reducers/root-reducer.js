import {combineReducers} from "redux";
import {appData} from "./app-data/app-data";
import {appState} from "./app-state/app-state";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.STATE]: appState,
});
