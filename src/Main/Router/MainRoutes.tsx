import { Routes, Route, Navigate } from 'react-router-dom';
import { ClientsPage, DesignsPage, FaqPage, HomePage, PartnersPage } from '../pages';
import { Navbar } from '../../ui/Navbar';

export const MainRoutes: React.FC = () => {
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
        </>
    )
}
