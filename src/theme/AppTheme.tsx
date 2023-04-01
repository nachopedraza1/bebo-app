import { CssBaseline, ThemeProvider } from "@mui/material"
import { BeboTheme } from "./BeboTheme"

export const AppTheme: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    return (
        <ThemeProvider theme={BeboTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
