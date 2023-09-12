import { ptBR as DataGridLocale } from '@mui/material/locale'
import { createTheme } from "@mui/material/styles"
import { ptBR as MaterialLocale } from '@mui/x-data-grid'

export const theme = createTheme({
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