import { useParams, Link } from "react-router-dom"
import { useCustomSelector } from "../../hooks";
import { Divider, Grid, Typography } from "@mui/material";
import { Breadcrumb, DetailsDesign, FileType, Payments } from "../components";


export const ViewDesignPage: React.FC = () => {

    const { designId } = useParams();

    const { posts } = useCustomSelector(state => state.posts);

    const post = posts.find(({ id }) => id === designId) || {}

    const { imgUrl, title } = post;

    return (
        <Grid container justifyContent="space-between">

            <Breadcrumb {...post} />

            <Grid item xs={7.4} >
                <img src={imgUrl} width="100%" style={{ maxWidth: "700px", borderRadius: "5px" }} alt="" />
            </Grid>

            <Grid item xs={4}>
                <Grid container direction="column" gap={3}>

                    <Typography variant="h5" fontSize={25}> {title} </Typography>

                    <Payments />

                    <DetailsDesign {...post} />

                    <FileType {...post} />

                </Grid>
            </Grid>
        </Grid>
    )
}
