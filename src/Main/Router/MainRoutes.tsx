import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from '../../ui/Navbar';
import { Container } from '@mui/material';

const HomePage = lazy(() => import('../pages/HomePage'));
const DesignsPage = lazy(() => import('../pages/DesignsPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const PartnersPage = lazy(() => import('../pages/PartnersPage'));
const ViewDesignPage = lazy(() => import('../pages/ViewDesignPage'));
const ClientsPage = lazy(() => import('../pages/ClientsPage'));


export const MainRoutes: React.FC = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/faq' element={<FaqPage />} />
                        <Route path='/designs' element={<DesignsPage />} />
                        <Route path='/clients' element={<ClientsPage />} />
                        <Route path='/partners' element={<PartnersPage />} />
                        <Route path='/designs/:designId' element={<ViewDesignPage />} />
                        <Route path='/*' element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    )
}
