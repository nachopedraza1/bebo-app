import { ChevronRight } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { Post } from "../../Interfaces/interfaces"

export const Breadcrumb: React.FC<Post> = ({ title, category }) => {
    
    return (
        <Grid container alignItems="center" color="#8c8c8c" p="50px 0px">
            <Typography > Designs </Typography>
            <ChevronRight fontSize="small" sx={{ mx: 2 }} />
            <Typography> {category} </Typography>
            <ChevronRight fontSize="small" sx={{ mx: 2 }} />
            <Typography textTransform="capitalize" color="black"> {title} </Typography>
        </Grid>
    )
}
