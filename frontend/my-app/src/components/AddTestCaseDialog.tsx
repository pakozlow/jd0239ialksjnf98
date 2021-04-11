import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TestCaseStatusDropdown from './TestCaseStatusDropdown';
import { TestCaseStatus } from '../redux/testcase/types';

interface AddTestCaseDialogProps {
  open: boolean;
  handleClose: () => void;
  handleAddNewTestCase: (testCase: {name: string; status: TestCaseStatus}) => void;
}

export default function AddTestCaseDialog(props: AddTestCaseDialogProps) {

  const [testName, setTestName] = React.useState('');
  const [testStatus, setTestStatus] = React.useState(TestCaseStatus.UNDEFINED);

  const handleStatusChange = (value: any) => setTestStatus((value as string) as TestCaseStatus);

  const resetState = () => {
    setTestName('');
    setTestStatus(TestCaseStatus.UNDEFINED);
  }

  const handleCreateNewTestCaseClick = () => {
    props.handleAddNewTestCase({ name: testName, status: testStatus });
    handleClose();
  };

  const handleClose = () => {
    props.handleClose();
    resetState();
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create new test case</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new test case
            </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Test name"
            value={testName}
            onChange={(e: any) => setTestName(e.target.value)} />
          <TestCaseStatusDropdown
            status={TestCaseStatus.UNDEFINED}
            onChange={handleStatusChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateNewTestCaseClick} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
