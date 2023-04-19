import { Link } from "react-router-dom"
import { IconButton } from "@mui/material"
import { Settings } from "@mui/icons-material"

export const AdminCp: React.FC = () => {
    return (
        <IconButton
            component={Link}
            to="/admincp"
            color='secondary'
            sx={{
                position: "absolute",
                top: 17,
                right: 30
            }}
        >
            <Settings />
        </IconButton >
    )
}
