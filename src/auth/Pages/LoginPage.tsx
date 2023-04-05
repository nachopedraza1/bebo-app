import { Google } from "@mui/icons-material"
import { Button, Grid, Typography } from "@mui/material"
import { googleLogin } from "../Providers/Providers"
import { useCustomDispatch } from "../../hooks/useRedux"
import { startLogin } from "../../redux/thuks"

export const LoginPage: React.FC = () => {

    const dispatch = useCustomDispatch();

    const startLoginRest = () => {
        dispatch(startLogin())
    }

    return (
        <Grid
            container
            width="100%"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            bgcolor="#0f152a"
        >
            <Grid item textAlign="center">
                <Typography variant="h6" color="white"> ADMIN PANEL </Typography>
                <Button className="vs-btn" variant="text" endIcon={<Google />}
                    onClick={() => startLoginRest()}>
                    INGRESAR CON GOOGLE
                </Button>
            </Grid>
        </Grid>
    )
}
