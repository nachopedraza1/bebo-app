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
                    justifyContent={{ xs: "center", md: "space-between" }}
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
                    <Grid item xs={12} md={3}>
                        <Grid container justifyContent={{ xs: "center", md: "start" }} alignItems="center" gap={1.7} className='social-links'>
                            <Link href='https://www.youtube.com/channel/UClmjxTyiMGgLwd3XGZguTTw' target='_blank'>
                                <YouTube sx={{ fontSize: "30px" }} />
                            </Link>
                            <Link href='https://www.facebook.com/profile.php?id=100086009644249' target='_blank' >
                                <FacebookRounded sx={{ fontSize: "25px" }} />
                            </Link>
                            <Link href='https://discord.gg/ymumRax9xd' target='_blank' >
                                <i className="fa-brands fa-discord" style={{ fontSize: "23px" }}></i>
                            </Link>
                            <Link href='https://wa.me/5493735539909' target='_blank'>
                                <WhatsApp sx={{ fontSize: "25px" }} />
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Typography color="#8d9294" textAlign="center"> © 2023 - 2025 bebomarket.com.ar. All rights reserved. </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid container>

            </Grid>
        </>
    )
}
