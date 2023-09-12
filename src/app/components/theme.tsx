import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { toogleTheme } from "../../redux/reducers/theme.slice"
import { RootState } from "../../redux/store"


export const Theme = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkTheme)

  return (
    <>
      <h4>{darkMode ? "Dark" : "Light"}</h4>
      <Button onClick={() => dispatch(toogleTheme())} variant="contained">ToogleTheme</Button>
    </>
  )
}