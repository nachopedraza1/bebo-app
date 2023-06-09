import { useParams } from "react-router-dom"
import { useCustomSelector } from "../../hooks";
import { TransitionPage } from "../Layout/TransitionPage";
import { Breadcrumb, BuyDesign, DetailsDesign, FileType, Image, Payments, Related, ViewDemo } from "../components";
import { Grid, Typography } from "@mui/material";


export const ViewDesignPage: React.FC = () => {

    const { designId } = useParams();

    const { posts } = useCustomSelector(state => state.posts);

    const post = posts.find(({ id }) => id === designId) || {}

    const { imgUrl, title, urlVideo } = post;

    const relatedPost = posts.filter(({ id, category }) => category === post.category && id != post.id);

    return (
        <TransitionPage>
            <Grid container justifyContent="space-between">

                <Breadcrumb  {...post} />

                <Grid item xs={12} md={7.4} >
                    <Image imgUrl={imgUrl} />
                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid container direction="column" gap={3}>

                        <Typography variant="h5" fontSize={25}> {title} </Typography>

                        <Payments />

                        <DetailsDesign {...post} />

                        {!!urlVideo && <ViewDemo {...post} />}

                        <FileType {...post} />

                        <Related relatedPost={relatedPost} />

                    </Grid>
                </Grid>

                <BuyDesign {...post} />

            </Grid >
        </TransitionPage>
    )
}