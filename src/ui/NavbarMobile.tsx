import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Link, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, Button } from '@mui/material';
import { Brush, Gavel, Handshake, Home, Quiz, WhatsApp } from '@mui/icons-material';

const navLinks = [
    { id: 1, text: "home", path: "/" },
    { id: 2, text: "designs", path: "/designs" },
    { id: 3, text: "terms", path: "/terms" },
    { id: 4, text: "partners", path: "/partners" },
    { id: 5, text: "faq", path: "/faq" },
];

export const NavbarMobile: React.FC = () => {

    const [btnState, setBtnState] = useState(false);

    const toggleClassBtn = () => {
        setBtnState(!btnState)
    }

    let btnOnState = btnState ? "is-active" : "";

    return (
        <Grid container justifyContent="space-between" alignItems="center" display={{ xs: "flex", md: "none" }}>
            <Grid item >
                <button className={`hamburger hamburger--emphatic shadow-none d-lg-none ${btnOnState}`} type="button"
                    id="btnMenu" onClick={toggleClassBtn}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>

                <Drawer
                    open={btnState}
                    onClose={toggleClassBtn}
                    PaperProps={{ sx: { backgroundColor: "primary.main" } }}
                >
                    <List sx={{ paddingRight: 4 }}>
                        {navLinks.map(({ id, text, path }) => (
                            <>
                                <ListItem key={id} disablePadding>
                                    <Link component={RouterLink} to={path} underline='none' >
                                        <ListItemButton disableRipple onClick={toggleClassBtn}>
                                            <ListItemIcon>
                                                {text === "home" ? <Home color='secondary' />
                                                    : text === "designs" ? <Brush color='secondary' />
                                                        : text === "terms" ? <Gavel color='secondary' />
                                                            : text === "partners" ? <Handshake color='secondary' />
                                                                : <Quiz color='secondary' />
                                                }
                                            </ListItemIcon>
                                            <Typography
                                                fontFamily="Chakra Petch"
                                                textTransform="capitalize"
                                                color="#fff"
                                                fontSize={18}
                                            > {text}
                                            </Typography>
                                        </ListItemButton>
                                    </Link>
                                </ListItem>
                                <Divider />
                            </>
                        ))}
                    </List>

                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                    >
                        <Button
                            className='vs-btn'
                            href='https://wa.me/5493735539909'
                            target='_blank'
                            variant='text'
                            startIcon={<WhatsApp />}>
                            Contactanos!
                        </Button>
                        <img src="/assets/LOGOBEBO.png" width="70px" />
                    </Grid>

                </Drawer>
            </Grid>

            <Grid item >
                <img src="/assets/LOGOBEBO.png" width={40} style={{ paddingTop: 6 }} />
            </Grid>

        </Grid >
    );
}
