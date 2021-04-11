import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import React from "react";
import useTestCaseApi from "../hooks/TestCaseApi";
import { TestCaseStatus } from "../redux/testcase/types";
import AddTestCaseDialog from "./AddTestCaseDialog";

const useStyles = makeStyles(theme => ({
  createButton: {
    backgroundColor: "white"
  },

  label: {
    width: 150,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginRight: theme.spacing(2)
  }
}));

export default function HeaderBar() {
  const classes = useStyles();
  const [addTestCaseDialogOpen, setAddTestCaseDialogOpen] = React.useState(false);
  const testCaseApi = useTestCaseApi();
  
  const handleCreateNewTestCaseClick = (testCase: { name: string; status: TestCaseStatus }) => {
    testCaseApi.createTestCase(testCase);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.createButton}
            onClick={() => setAddTestCaseDialogOpen(true)}>
            Create new test
          </Button>
          <AddTestCaseDialog
            open={addTestCaseDialogOpen}
            handleClose={() => setAddTestCaseDialogOpen(false)}
            handleAddNewTestCase={handleCreateNewTestCaseClick} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}