import { Divider, Grid, Typography } from "@mui/material"

export const Payments: React.FC = () => {
    return (
        <>
            <Divider />
            <Typography variant="h5" fontSize={18}> Available Payments: </Typography>

            <Grid container alignItems="center" spacing={2} >
                <Grid item xs={4}>
                    <img src="/assets/mp-logo.webp" width="100%" alt="" />
                </Grid>
                <Grid item xs={4}>
                    <img src="/assets/logo-pp.png" width="100%" alt="" />
                </Grid>
                <Grid item xs={4}>
                    <img src="/assets/binance-logo.png" width="100%" alt="" />
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}
