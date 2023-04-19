import { createTheme, CssBaseline } from '@mui/material';

export const BeboTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            body{
                background-color: #E7EBF0;
            }
            `
        }
        ,
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase",
                    fontSize: "12px",
                    lineHeight: "0px",
                    fontFamily: "Aldrich",
                    padding: "10px",
                    color: "white",
                    borderRadius: "3px",
                    "&:hover": { backgroundColor: "#0000003a", color: "#f1484c" }
                }
            }
        },
    },
    typography: {
        subtitle1: {
            fontWeight: 400,
            textTransform: "uppercase"
        },
        subtitle2: {
            marginBottom: 6,
            fontSize: 17,
            fontWeight: 700,
            textTransform: "capitalize",
        },
        h6: {
            fontWeight: 300
        },
        h5: {
            textTransform: "capitalize",
            fontWeight: 600,
        },
        h4: {
            fontFamily: "Aldrich",
            fontSize: "17px"
        },
        h3: {
            fontFamily: "Chakra Petch",
            fontWeight: 300
        },
        fontFamily: 'Open Sans'
    },
    palette: {
        primary: {
            main: "#0f152a"
        },
        secondary: {
            main: "#f1484c"
        }
    }
});
