import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RewardsHome from './components/RewardsHome';

const theme = createTheme({
  palette: {
    // mode: 'dark',
    mode: 'light'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RewardsHome/>
    </ThemeProvider>
  );
}

export default App;
