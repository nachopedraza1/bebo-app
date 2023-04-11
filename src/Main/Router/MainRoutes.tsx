import { Routes, Route, Navigate } from 'react-router-dom';

import { ClientsPage, DesignsPage, FaqPage, HomePage, PartnersPage, ViewDesignPage } from '../pages';
import { Navbar } from '../../ui/Navbar';

import { Container } from '@mui/material';

export const MainRoutes: React.FC = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/faq' element={<FaqPage />} />
                    <Route path='/designs' element={<DesignsPage />} />
                    <Route path='/clients' element={<ClientsPage />} />
                    <Route path='/partners' element={<PartnersPage />} />
                    <Route path='/designs/:designId' element={<ViewDesignPage />} />
                    <Route path='/*' element={<Navigate to="/" />} />
                </Routes>
            </Container>
        </>
    )
}
