import { Route, Routes } from 'react-router-dom';

import { useCheckAuth } from '../hooks';

import { AdminRoutes } from '../Admin/Routes/AdminRoutes';
import { MainRoutes } from '../Main/Router/MainRoutes';
import { AuthRoutes } from '../auth/Router/AuthRoutes';

export const AppRouter: React.FC = () => {

    const status = useCheckAuth();

    return (
        <Routes>
            {
                status !== "authenticated"
                    ? <Route path="/auth/*" element={<AuthRoutes />} />
                    : <Route path="/admincp/*" element={<AdminRoutes />} />
            }

            <Route path="/*" element={< MainRoutes />} />

        </Routes >
    )
}
