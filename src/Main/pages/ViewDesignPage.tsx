import { useParams } from "react-router-dom"
import { useCustomSelector } from "../../hooks";
import { Breadcrumb, DetailsDesign, FileType, Image, Payments } from "../components";
import { Grid, Typography } from "@mui/material";

const ViewDesignPage: React.FC = () => {

    const { designId } = useParams();

    const { posts } = useCustomSelector(state => state.posts);

    const post = posts.find(({ id }) => id === designId) || {}

    const { imgUrl, title } = post;

    return (
            <Grid container justifyContent="space-between">

                <Breadcrumb  {...post} />

                <Grid item xs={7.4} >
                    <Image imgUrl={imgUrl} />
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction="column" gap={3}>

                        <Typography variant="h5" fontSize={25}> {title} </Typography>

                        <Payments />

                        <DetailsDesign {...post} />

                        <FileType {...post} />

                    </Grid>
                </Grid>
            </Grid >
    )
}

export default ViewDesignPage;