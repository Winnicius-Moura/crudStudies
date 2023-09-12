import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  darkTheme: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toogleTheme: (prevState) => {
      prevState.darkTheme = !prevState.darkTheme
    },
  },
})

export const { toogleTheme } = themeSlice.actions

export default themeSlice.reducer