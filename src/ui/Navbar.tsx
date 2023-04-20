import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useCustomSelector } from '../hooks';

import { SelectLang, AdminCp } from '../Main/components';

import { Button, Grid, } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const navLinks = [
    { id: 1, text: "home", path: "/" },
    { id: 2, text: "designs", path: "/designs" },
    { id: 3, text: "terms", path: "/terms" },
    { id: 4, text: "partners", path: "/partners" },
    { id: 5, text: "faq", path: "/faq" },
];


export const Navbar: React.FC = () => {

    const { pathname } = useLocation();

    const { status, email } = useCustomSelector(state => state.auth);

    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        if (pathname === "/") return setActiveTab("start-home");
        if (pathname.includes("designs")) return setActiveTab("start-designs");
        setActiveTab(`start-${pathname.substring(1)}`)
    }, [pathname])

    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center" display={{ xs: "none", md: "flex" }}>

                <Grid item>
                    <Grid container alignItems="center" gap={3}>
                        <img src="/assets/LOGOBEBO.png" width="50px" alt="" style={{ paddingTop: 5 }} />
                        <nav>
                            {navLinks.map(({ id, path, text }) => (
                                <NavLink
                                    to={path}
                                    key={id}
                                    className="nav-link"
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

                        <Button
                            className='vs-btn'
                            href='https://wa.me/5493735539909'
                            target='_blank'
                            variant='text'
                            startIcon={<WhatsApp />}>
                            Contactanos!
                        </Button>

                    </Grid>
                </Grid>

            </Grid>

            {
                status === "authenticated"
                    && email === "nachopedraza1905@gmail.com"
                    ? <AdminCp /> : null
            }
        </>
    )
}

