import { createSlice } from "@reduxjs/toolkit"
interface ThemeState {
  darkMode: boolean
}
const initialState: ThemeState = {
  darkMode: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { toogleTheme } = themeSlice.actions

export default themeSlice.reducer