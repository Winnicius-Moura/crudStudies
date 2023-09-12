import { FormControlLabel, FormGroup, Switch, ThemeProvider, Typography, createTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { toogleTheme } from './redux/reducers/theme.slice';
import { RootState } from './redux/store';

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f2f2f2",
    },
    text: {
      primary: "#11111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#222",
    },
    text: {
      primary: "#fff",
    },
  },
});

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  // initialize dispatch variable
  const dispatch = useDispatch();

  // ToggleSwitch component
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme.darkTheme}
                onChange={() => dispatch(toogleTheme())}
              />
            }
            label="Toggle Theme"
          />
        </FormGroup>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <div
        style={{
          minHeight: "100vh",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
        <Typography variant="h1">Hello</Typography>
      </div>
    </ThemeProvider>
  )
}

export default App
