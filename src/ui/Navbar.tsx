import { NavLink } from 'react-router-dom';

import { Button, Container, Grid } from '@mui/material';
import { AdvertisingSlide } from "./AdvertisingSlide";
import { useState } from 'react';
import { WhatsApp } from '@mui/icons-material';
import { SelectLang } from '../Main/components';

const navLinks = [
    { id: 1, text: "inicio", path: "/", classlink: "start-home" },
    { id: 2, text: "diseños", path: "/design", classlink: "start-diseños" },
    { id: 3, text: "clientes", path: "/clients", classlink: "start-blog" },
    { id: 4, text: "asociados", path: "/partners", classlink: "start-portfolio" },
    { id: 5, text: "faq", path: "/faq", classlink: "start-contact" },
];


export const Navbar = () => {
    const [activeTab, setActiveTab] = useState<string>("start-home");

    return (
        <>
            <Grid bgcolor="#0f152a" p={1}>
                <Container maxWidth="lg">
                    <Grid container justifyContent="space-between" alignItems="center">

                        <Grid item>
                            <Grid container alignItems="center" gap={3}>
                                <img src="/assets/LOGOBEBO.png" width="50px" alt="" style={{ paddingTop: 5 }} />
                                <nav>
                                    {navLinks.map(({ id, path, text, classlink }) => (
                                        <NavLink
                                            to={path}
                                            key={id}
                                            className="nav-link"
                                            onClick={() => setActiveTab(classlink)}
                                            style={({ isActive }) => { return { color: isActive ? "white" : "" } }}
                                        >
                                            {text}
                                        </NavLink>
                                    ))}
                                    <div className={`${activeTab} animation`}></div>
                                </nav>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center" gap={3} >
                                <SelectLang />

                                <Button className='vs-btn' variant='text' startIcon={<WhatsApp />}>
                                    Contactanos!
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Container >
            </Grid >
            <AdvertisingSlide />
        </>
    )
}
