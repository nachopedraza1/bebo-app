import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';
import { Navbar } from '../ui/Navbar';

export const AppRouter: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
               {/*  <Route path='/*' element={<Navigate to='/' />} /> */}
            </Routes>
        </>
    )
}
