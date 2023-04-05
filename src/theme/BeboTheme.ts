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
        h6: {
            fontFamily: "Aldrich"

        }
    }

});
