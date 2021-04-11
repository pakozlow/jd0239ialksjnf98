import { Reducer } from "redux";
import { FETCHED_TEST_CASES, TestCaseActions } from "./actions";
import { TestCaseState } from "./types";

const testCaseState: TestCaseState = {
    testCases: []
}
export const testCaseReducer: Reducer<TestCaseState, TestCaseActions> = (state = testCaseState, action) => {
    switch (action.type) {
        case FETCHED_TEST_CASES: {
            return {
                ...state,
                testCases: action.testCases
            }
        }
        default: {
            return state;
        }
    }
}