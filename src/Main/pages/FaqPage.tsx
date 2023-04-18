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

                <Typography fontSize={17} fontWeight={600}> 4. Does our store accept PayPal payments?</Typography>

                <Typography > Yes, we accept payments from Paypal, you must make the purchase process normally and at the time of payment specify that you want to pay through paypal, we will provide the deposit email and you must send us the proof of payment. </Typography>

                <Typography fontSize={17} fontWeight={600}> 5. What payment methods do you support?</Typography>

                <Divider />
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    padding={2}
                    gap={4}
                >
                    <img src="/assets/mp-logo.webp" width="110px" alt="" />
                    <img src="/assets/logo-pp.png" width="120px" alt="" />
                    <img src="/assets/logo-visa.png" width="75px" alt="" />
                    <img src="/assets/logo-master.png" width="60px" alt="" />
                    <img src="/assets/binance-logo.png" width="140px" alt="" />
                    <img src="/assets/logo-wu.png" width="140px" alt="" />
                </Grid>
                <Divider />

                <Typography fontSize={17} fontWeight={600}> 6. Template files delivery.</Typography>

                <Typography> We currently work with manual processing of all orders. This means that for all payments from any platform, it is necessary to confirm the transaction in the form of a screenshot of your account statement with information about your purchase.
                    Delivery is immediate upon receipt of proof of payment, with slight delays possible on weekends. Once payment is processed and confirmed, you will receive a link to download the design files. </Typography>

                <Typography fontSize={17} fontWeight={600}> 7. Return policy.</Typography>

                <Typography> Our store Bebodesign.com does not provide a return of digital goods after they are bought and delivered to your E-mail address. Refund is possible only in a case of delivering damaged or confused files and this is due to our fault. </Typography>

            </Grid>

        </TransitionPage>
    )
}
