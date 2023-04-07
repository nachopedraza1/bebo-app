import { Link, Routes, Route, Navigate } from 'react-router-dom';
import { useCustomSelector } from '../../hooks';

import { ClientsPage, DesignsPage, FaqPage, HomePage, PartnersPage } from '../pages';
import { Navbar } from '../../ui/Navbar';

import { Grid, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';

export const MainRoutes: React.FC = () => {

    const { status, uid, email } = useCustomSelector(state => state.auth);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/faq' element={<FaqPage />} />
                <Route path='/design' element={<DesignsPage />} />
                <Route path='/clients' element={<ClientsPage />} />
                <Route path='/partners' element={<PartnersPage />} />
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>

            {
                status === "authenticated"
                    && uid === "91HK4fYTXQb63m5t4ZSEsqWryZ23"
                    && email === "nachopedraza1905@gmail.com"
                    ? <Grid container position="absolute" top={17} left={"96.2%"}>
                        <IconButton component={Link} to="/admincp" color='error'>
                            <Settings />
                        </IconButton >
                    </Grid> : null
            }
        </>
    )
}
