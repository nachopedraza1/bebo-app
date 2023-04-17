import { FacebookRounded, Instagram, WhatsApp, YouTube } from '@mui/icons-material';
import { Grid, Divider, Container, Link, Typography } from '@mui/material';


export const Footer: React.FC = () => {
    return (
        <>
            <Container sx={{ marginTop: 10 }}>
                <Divider />
                <Grid
                    container
                    className='footer'
                    justifyContent="space-between"
                    alignItems="center"
                    padding={4}
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

                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={3}>
                        <Grid container alignItems="center" gap={1.7} className='social-links'>
                            <Link href='/'>
                                <YouTube sx={{ fontSize: "30px" }} />
                            </Link>
                            <Link href='/' >
                                <FacebookRounded sx={{ fontSize: "25px" }} />
                            </Link>
                            <Link href='/' >
                                <Instagram sx={{ fontSize: "25px" }} />
                            </Link>
                            <Link href='/' >
                                <WhatsApp sx={{ fontSize: "25px" }} />
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography color="#8d9294"> © 2018 - 2023 Bebodesign.com. All rights reserved. </Typography>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
