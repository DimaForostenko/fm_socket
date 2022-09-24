import {applyMiddleware, legacy_createStore} from "redux";
import createSagaMV from "redux-saga";
import {composeWithDevTools} from "react-redux-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMV = createSagaMV();

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMV))
  );
  
sagaMV.run(rootSaga);

export default store;