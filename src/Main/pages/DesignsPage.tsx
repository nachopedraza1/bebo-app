import { useCustomSelector } from "../../hooks"
import { FilterBar, PostItem } from "../components"
import { Grid } from "@mui/material"

const DesignsPage: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <Grid container>
            <FilterBar />
            <Grid container justifyContent="space-between" mt={5}>
                {posts.map(post => (
                    <PostItem key={post.id}  {...post} />
                ))}
            </Grid>
        </Grid>
    )
}

export default DesignsPage;