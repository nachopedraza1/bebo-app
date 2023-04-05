import { Route, Routes } from 'react-router-dom';

import { MainRoutes } from '../Main/routes/MainRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter: React.FC = () => {

    const status = "autenticado";

    return (
        <Routes>
            {
                status === "autenticado" ?
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
