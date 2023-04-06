import { Navigate, Route, Routes } from "react-router-dom"
import { NewDesign } from "../Pages/NewDesign"
import { AdminLayout } from "../Layout/AdminLayout"

export const AdminRoutes: React.FC = () => {
    return (
        <AdminLayout>
            <Routes>
                <Route path="panel" element={<NewDesign />} />
                <Route path="/*" element={<Navigate to="/admincp/panel" />} />
            </Routes>
        </AdminLayout>
    )
}
