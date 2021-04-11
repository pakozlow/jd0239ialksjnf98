import axios from "axios";
import { useDispatch } from "react-redux";
import { FetchedTestCasesAction, FETCHED_TEST_CASES } from "../redux/testcase/actions";
import { TestCase, TestCaseStatus } from "../redux/testcase/types";

export default function useTestCaseApi() {
  const dispatch = useDispatch();

  const fetchTestCases = () => {
    axios.get('testcases')
      .then(res => {
        const fetchedTestCasesAction: FetchedTestCasesAction = {
          testCases: res.data as TestCase[],
          type: FETCHED_TEST_CASES
        }
        dispatch(fetchedTestCasesAction);
      })
      .catch(error => console.log(error));
  };

  const updateTestCase = (testCase: TestCase) => {
    axios.put(`/testcases/${testCase.id}`, testCase)
      .then(() => fetchTestCases())
      .catch(error => console.log(error));
  };

  const createTestCase = (testCase: { name: string; status: TestCaseStatus }) => {
    axios.post('/testcases', testCase)
      .then(() => fetchTestCases())
      .catch(error => console.log(error));
  }

  return {
    fetchTestCases,
    updateTestCase,
    createTestCase
  }
}