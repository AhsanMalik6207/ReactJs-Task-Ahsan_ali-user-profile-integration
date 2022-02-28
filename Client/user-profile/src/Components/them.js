import { createTheme } from "@material-ui/core";
import { dark } from "@mui/material/styles/createPalette";
const theme = createTheme({
    palette:{
        primary:{
            main:'#003049',
        },
        secondary:{
            main: '#d62828',
        },
        type:dark

    }
})
export default theme;