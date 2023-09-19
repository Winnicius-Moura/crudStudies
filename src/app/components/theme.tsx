import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../redux/reducers/theme.slice"
import { RootState } from "../../redux/store"


export const Theme = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)

  return (
    <>
      <h4>{darkMode ? "Dark" : "Light"}</h4>
      <Button onClick={() => dispatch(toggleTheme())} variant="contained">ToogleTheme</Button>
    </>
  )
}