import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  darkMode: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme: (prevState) => {
      prevState.darkMode = !prevState.darkMode
    },
  },
})

export const { toogleTheme } = themeSlice.actions

export default themeSlice.reducer