import { Navbar } from './Navbar';
import { AdvertisingSlide } from "./AdvertisingSlide";

import { AppBar, Container, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import { NavbarMobile } from './NavbarMobile';

interface Props {
    window?: () => Window;
}

export const Header = (props: Props) => {

    const { window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar sx={{ padding: 1 }}>
                        <Container maxWidth="lg">
                            <Navbar />
                            <NavbarMobile />
                        </Container >
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
            <AdvertisingSlide />
        </>
    )
}

