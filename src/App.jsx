import { createTheme,ThemeProvider } from "@mui/material"
import MyContainer from "./components/myContainer";


const theme=createTheme({
typography:{
  fontFamily:[
    "ElMessiri"
  ]
}

});

function App() {

  return (
    <ThemeProvider theme={theme}>
<div className=" flex justify-center items-center h-screen bg-blue-700 ">
    <MyContainer/>
    </div>    </ThemeProvider>
  )
}

export default App
