import { FormControl, FormControlLabel, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useTestCaseApi from "../hooks/TestCaseApi";
import { AppState } from "../redux";
import { TestCase, TestCaseStatus } from "../redux/testcase/types";
import TestCaseStatusDropdown from "./TestCaseStatusDropdown";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
    alignItems: 'center'
  },
  label: {
    width: 150,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginRight: theme.spacing(2)
  }
}));

export default function TestCaseList() {
  const classes = useStyles();
  const testCases = useSelector<AppState, TestCase[]>(state => state.testCaseState.testCases);

  const testCaseApi = useTestCaseApi();

  const handleTestStatusChange = (id: number, value: any) => {
    const testCase = testCases.find(tc => tc.id === id);
    if (testCase) {
      testCaseApi.updateTestCase({id: testCase.id, status: value as TestCaseStatus, name: testCase.name});
    }
  };

  useEffect(() => testCaseApi.fetchTestCases(), [])

  const testCaseStatus = (testCase: TestCase) => {
    return <FormControl className={classes.formControl}>
      <FormControlLabel
        labelPlacement="start"
        control={<TestCaseStatusDropdown
          onChange={(value: any) => handleTestStatusChange(testCase.id, value)}
          status={testCase.status}
        />}
        label={
          <Typography className={classes.label}>{testCase.name}</Typography>
        } />
    </FormControl>;
  }

  return (
    <Grid container alignItems="center" justify="center" direction="row">
      {testCases.map(td => testCaseStatus(td))}
    </Grid>
  )
}