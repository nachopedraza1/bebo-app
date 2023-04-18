import { Link as RouterLink } from "react-router-dom";
import { TransitionPage } from "../Layout/TransitionPage"
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Image } from "../components";


const breadcrumbs = [
    <Link component={RouterLink} to="/" underline="hover" key="1" color="inherit">
        Home Page
    </Link>,
    <Typography key="3" color="text.primary" textTransform="capitalize">
        Partnership
    </Typography>,
];


export const PartnersPage: React.FC = () => {
    return (
        <TransitionPage>

            <Grid container alignItems="center" color="#8c8c8c" p="50px 0px">
                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<NavigateNext fontSize="small" sx={{ mx: 2 }} />}
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>
            </Grid>

            <Typography variant='h3' mb={2} fontSize={45} >Partnership</Typography>
            <Divider />
            <Image imgUrl="/assets/banner_partner.jpg" maxWidth="100%" />

        </TransitionPage>
    )
}