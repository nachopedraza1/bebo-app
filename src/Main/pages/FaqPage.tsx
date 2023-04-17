import { Link as RouterLink } from "react-router-dom";
import { TransitionPage } from "../Layout/TransitionPage"
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const breadcrumbs = [
    <Link component={RouterLink} to="/" underline="hover" key="1" color="inherit">
        Home Page
    </Link>,
    <Typography key="3" color="text.primary" textTransform="capitalize">
        FAQ
    </Typography>,
];

export const FaqPage: React.FC = () => {
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

            <Typography variant='h3' mb={2} fontSize={45} >FAQ</Typography>
            <Divider />

            <Grid container direction="column" mt={2} gap={2}>
                <Typography fontSize={17} fontWeight={600}> 1. What is Bebodesign.com? </Typography>

                <Typography > Bebodesign.com is a store of unique and high quality Mu Online themed designs. Our store unlike others does not work as an intermediary between customer / author, all designs that you will find on the web are created exclusively by the team of bebodesign.com, so we offer a guaranteed support and the best experience for all our customers. </Typography>

                <Typography fontSize={17} fontWeight={600}> 2. Template categories and filters. </Typography>

                <Typography > All templates are divided into a main filter of categories. You can choose the necessary and interesting category first, and then choose the necessary layout. You can also sort all the products you have selected by date, price, rating and you see.
                    Each template has its own set of elements. Initially, the basic package contains a PSD template that you can customize to your liking. </Typography>

                <Typography fontSize={17} fontWeight={600}> 3. How to buy a template? </Typography>

                <Typography > You can buy any template in our store without registration. All you have to do is to choose the design, then you have to fill in the "Delivery email" field with the important email address of the design delivery and press the green "Buy now" button, a chat will open and the only thing you have to do is to send the generated order message.
                    <br />
                    By purchasing any design from our store, you automatically accept the license agreement and terms of service.
                </Typography>

            </Grid>

        </TransitionPage>
    )
}
