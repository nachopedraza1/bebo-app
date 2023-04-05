import { Route, Routes } from 'react-router-dom';

import { useCheckAuth } from '../hooks/useCheckAuth';
import { MainRoutes } from '../Main/routes/MainRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter: React.FC = () => {

    const status = useCheckAuth();

    return (
        <Routes>
            {
                status !== "authenticated" ?
                    <>
                        <Route path="/auth/*" element={<AuthRoutes />} />
                        <Route path="/*" element={<MainRoutes />} />
                    </>
                    :
                    <>
                        <Route path="/*" element={<MainRoutes />} />
                    </>
            }
        </Routes >
    )
}
