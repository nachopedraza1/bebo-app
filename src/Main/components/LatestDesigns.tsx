import { useCustomSelector } from "../../hooks"
import { Grid, Typography } from "@mui/material"
import { PostItem } from "./PostItem";

export const LatestDesigns: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <>
            <Typography variant='h3' mt={5} fontSize={45}> New Designs </Typography>
            <Grid container justifyContent="space-between" mt={5}>
                {posts.slice(0, 4).map(post => (
                    <PostItem key={post.id}  {...post} />
                ))}
            </Grid >
        </>
    )
}