import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { Footer, Navbar, Preloader } from '../../ui';

import { TermsPage, DesignsPage, FaqPage, HomePage, PartnersPage, ViewDesignPage } from '../pages';
import { AnimatePresence } from 'framer-motion';

export const MainRoutes: React.FC = () => {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <Preloader />
            <AnimatePresence mode='wait'>
                <Routes key={location.pathname} location={location}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/faq' element={<FaqPage />} />
                    <Route path='/designs' element={<DesignsPage />} />
                    <Route path='/clients' element={<TermsPage />} />
                    <Route path='/partners' element={<PartnersPage />} />
                    <Route path='/designs/:designId' element={<ViewDesignPage />} />
                    <Route path='/*' element={<Navigate to="/" />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}
