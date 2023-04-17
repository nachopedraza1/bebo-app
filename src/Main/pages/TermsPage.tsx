import { Link as RouterLink } from "react-router-dom";
import { TransitionPage } from "../Layout/TransitionPage"
import { Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

export const TermsPage: React.FC = () => {

    const breadcrumbs = [
        <Link component={RouterLink} to="/" underline="hover" key="1" color="inherit">
            Home Page
        </Link>,
        <Typography key="3" color="text.primary" textTransform="capitalize">
            Terms of Service
        </Typography>,
    ];

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

            

        </TransitionPage>
    )
}
