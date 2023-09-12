import { Box, Container } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import ptBR from "date-fns/locale/pt-BR"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App.tsx"
import "./index.css"
import { store } from "./redux/store.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
          <CssBaseline />
          <Container maxWidth="xl">
            <Box sx={{ my: 2 }}>
              <App />
            </Box>
          </Container>
        </LocalizationProvider>
      </Provider>
  </React.StrictMode>
)