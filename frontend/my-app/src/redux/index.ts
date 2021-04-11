import { combineReducers, createStore } from 'redux';
import { testCaseReducer } from './testcase/reducer';

const rootReducer = combineReducers({
    testCaseState: testCaseReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;