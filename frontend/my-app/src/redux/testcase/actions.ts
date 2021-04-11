import { Action } from "redux";
import { TestCase } from "./types";

export const FETCHED_TEST_CASES = 'FetchedTestCases';

export interface FetchedTestCasesAction extends Action<typeof FETCHED_TEST_CASES> {
    readonly testCases: TestCase[];
}

export type TestCaseActions =
    | FetchedTestCasesAction;