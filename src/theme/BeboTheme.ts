import { createTheme } from "@mui/material";

export const BeboTheme = createTheme({
    components: {
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
            marginBottom: 7,
            fontSize: 17,
            fontWeight: 600,
            textTransform: "uppercase",
        },
        h6: {
            fontWeight: 300
        },
        h5: {
            textTransform: "capitalize",
            fontWeight: 600,
        },
        h3: {
            textTransform: "uppercase",
            fontWeight: 300
        },
        fontFamily: 'Open Sans'
    },
    palette: {
        primary: {
            main: "#0f152a"
        }
    }
});
