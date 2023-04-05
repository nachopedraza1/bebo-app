import { useCustomDispatch } from "../../hooks/useRedux"
import { startLogin } from "../../redux/thuks"

import { Google } from "@mui/icons-material"
import { Button, Grid, Typography } from "@mui/material"

export const LoginPage: React.FC = () => {

    const dispatch = useCustomDispatch();

    const onLogin = () => dispatch(startLogin());

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
                    onClick={onLogin}>
                    INGRESAR CON GOOGLE
                </Button>

            </Grid>
        </Grid>
    )
}
