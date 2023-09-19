import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ptBR from "date-fns/locale/pt-BR";
import { useSelector } from "react-redux";
import './index.css';
import { RootState } from "./redux/store.tsx";
import { darkTheme, lightTheme } from "./theme.ts";
import { Theme } from "./app/components/theme.tsx";

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)
  const selectedTheme = darkMode ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={selectedTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Box sx={{ my: 2 }}>
            {/* ADICIONAR AQUI OS COMPONENTES*/}
            <Theme />
          </Box>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
