import { Suspense, lazy } from "react";
import { useCustomSelector } from "../../hooks"
import { Grid, Typography } from "@mui/material"

const LazyPost = lazy(() => import('../components/PostItem'));

export const LatestDesigns: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <>
            <Typography variant='h3' mt={5} fontSize={45}> New Designs </Typography>
            <Grid container justifyContent="space-between" mt={5}>
                {posts.slice(0, 4).map(post => (
                    <Suspense fallback={<h1>LOADING...</h1>}>
                        < LazyPost key={post.id}  {...post} />
                    </Suspense>
                ))}
            </Grid>
        </>
    )
}