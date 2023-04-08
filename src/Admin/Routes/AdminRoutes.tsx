import { Navigate, Route, Routes } from "react-router-dom"
import { NewDesign } from "../Pages/NewDesign"
import { AdminLayout } from "../Layout/AdminLayout"
import { useEffect } from 'react';

export const AdminRoutes: React.FC = () => {

    useEffect(() => { localStorage.clear() }, []);

    return (
        <AdminLayout>
            <Routes>
                <Route path="panel" element={<NewDesign />} />
                <Route path="/*" element={<Navigate to="/admincp/panel" />} />
            </Routes>
        </AdminLayout>
    )
}
