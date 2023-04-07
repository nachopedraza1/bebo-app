import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Box, Typography, Toolbar, ListItemIcon, ListItemText, IconButton, List, ListItem, ListItemButton, Divider, Drawer, Grid, } from '@mui/material';
import { Brush, KeyboardBackspace, Logout, Menu, Settings } from '@mui/icons-material';
import { useCustomDispatch } from '../../hooks';
import { startLogout } from '../../redux/thuks';


const drawerWidth = 240;

interface Props {
    window?: () => Window;
    children: JSX.Element | JSX.Element[]
}

export const AdminLayout = (props: Props) => {

    const dispatch = useCustomDispatch();

    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logOut = () => dispatch(startLogout());

    const drawer = (
        <div>
            <Toolbar>
                <img src="/assets/LOGOBEBOBLACK.png" width="50px" alt="" />
            </Toolbar>
            <Divider />
            <List>
                {['Nuevo diseño', 'Ajustes'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Brush /> : <Settings />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Cerrar sesion'].map((text, index) => (
                    <ListItem key={text} disablePadding onClick={logOut}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Logout />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Grid container alignItems="center" gap={1} >
                    <KeyboardBackspace />
                    <Typography color="inherit" component={RouterLink} to="/" zIndex={1} >
                        Volver al inicio
                    </Typography>
                </Grid>

                {children}
            </Box>
        </Box >
    );
}