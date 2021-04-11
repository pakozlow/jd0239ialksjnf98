import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderBar from './components/HeaderBar';
import TestCaseList from './components/TestCaseList';

export default function App() {

  return (
    <>
      <CssBaseline />
      <Container>
        <HeaderBar />
        <TestCaseList />
      </Container>
    </>
  );
}
