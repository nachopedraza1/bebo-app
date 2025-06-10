import { Link as RouterLink } from "react-router-dom";
import { TransitionPage } from "../Layout/TransitionPage"
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from "@mui/material";
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

            <Typography variant='h3' mb={2} fontSize={45} >  Terms of Service </Typography>
            <Divider />

            <Grid container direction="column" mt={2} gap={2}>
                <Typography fontSize={17} fontWeight={600}> Conditions relating to the use of the Service </Typography>

                <Typography > No person under the age of eighteen (18) may use the Service, regardless of the consent of his or her parent or guardian to use the Service. </Typography>

                <Typography> You need a supported web browser to access the Service. You acknowledge and agree that bebomarket.com.ar may no longer support a particular web browser and that your continued use of the Service will require you to download a compatible web browser. You also acknowledge and agree that the performance of the Service depends on the performance of your computer equipment and Internet connection. </Typography>

                <Typography fontSize={17} fontWeight={600}> As a condition to your use of the Service, you agree not to: </Typography>

                <ul>
                    <li>impersonate or misrepresent your affiliation with any person or entity.</li>
                    <li> access, tamper with or use any non-public area of the Service or bebomarket.com.ar's computer systems. </li>
                    <li>attempt to probe, scan, or test the vulnerability of the Service or any related system or network or breach any security or authentication measures used in connection with the Service and such systems and networks.</li>
                    <li>attempt to decipher, decompile, disassemble, reverse engineer or otherwise investigate any of the software or components used to provide the Service.</li>
                    <li>harm or threaten to harm other users in any way or interfere with, or attempt to interfere with, the access of any user, host or network, including without limitation, by sending a virus, overloading, flooding, spamming, or mail-bombing the Service</li>
                    <li>provide payment information belonging to a third party.</li>
                    <li>use the Service in an abusive way contrary to its intended use, to bebomarket.com.ar policies and instructions and to any applicable law.</li>
                    <li>systematically retrieve data or other content from the Service to create or compile, directly or indirectly, in single or multiple downloads, a collection, compilation, database, directory or the like, whether by manual methods, through the use of bots, crawlers, or spiders, or otherwise.</li>
                    <li>infringe third party intellectual property rights when using or accessing the Service, including but not limited to in making available virtual items by using the Service.</li>
                    <li>make use of, promote, link to or provide access to materials deemed by bebomarket.com.ar at its sole discretion to be offensive or cause harm to bebomarket.com.ar reputation, including, but not limited to, illegal content and pornographic content and content deemed offensive or injurious to bebomarket.com.ar and/or the Service (such as Warez sites, IRC bots and bittorent sites)</li>
                </ul>

                <Typography fontSize={17} fontWeight={600}>Privacy Policy.</Typography>

                <Typography>Privacy Policy By using the Site, you acknowledge and agree that the Service provider processes your personal data in order to enable access to and use of the Site and to enable participation in the activities provided on the Site. Your personal data will be used solely to enable you to participate in the activities provided on the Site and for the purpose of carrying out verification procedures in connection with activities on the Site. Your personal data will not be disclosed to third parties, unless such disclosure is necessary to process your requests, carry out verification procedures or is required by law. You have the right to access the personal data that the service provider holds about you. You consent and agree to immediately inform the Service provider of changes to the personal data or other information provided. The Service provider collects a small part of the information sent from the browser (cookies) which may be disabled. However, disabling cookies may restrict your use of the Site. By agreeing to the Terms, you consent to the Service provider informing you from time to time about changes to the Site, new services and promotions. If you do not wish to receive direct marketing advertisements, you may opt out of receiving such service. You consent to the Service provider informing you from time to time about changes to the Site, new services and promotions. If you do not wish to receive direct marketing advertisements, you may opt out of receiving such service. you consent to the Service provider informing you from time to time about changes to the Site, new services and promotions. If you do not wish to receive direct marketing announcements, you may opt out of receiving such service.</Typography>

                <Typography> For customer service inquiries or disputes, you may contact us by email at support@bebomarket. Whenever possible, we will work with you and/or any user selling on our website to resolve any disputes arising from your purchase.</Typography>

                <Typography fontSize={17} fontWeight={600}>Return Policy</Typography>

                <Typography> Our bebomarket.com.ar store does not provide a refund on digital products after they are purchased and shipped to your email address. Refund is only possible in case of delivery of damaged or garbled files and this is due to our fault.</Typography>

                <Grid container direction="column">
                    <Typography fontSize={17} fontWeight={600} mt={3}>Administrator</Typography>
                    <Typography> Sebastian Britez </Typography>
                    <Typography> City: Chaco, Argentina </Typography>
                    <Typography> Email: bebo_e20@hotmail.com </Typography>
                    <Typography> Phone:  +54 9 3735 53-9909</Typography>
                </Grid>

            </Grid>
        </TransitionPage>
    )
}
