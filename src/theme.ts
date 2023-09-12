import { ptBR as DataGridLocale } from '@mui/material/locale';
import { createTheme } from "@mui/material/styles";
import { ptBR as MaterialLocale } from '@mui/x-data-grid';

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#5b5bd6',
      light: '#fefefe'
    },
    mode: 'dark',
  },
},
  MaterialLocale,
  DataGridLocale
)

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#5b5bd6',
      light: '#222'
    },
    mode: 'light',
  },
},
  MaterialLocale,
  DataGridLocale
)