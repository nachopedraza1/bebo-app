import { Suspense, lazy } from "react";
import { useCustomSelector } from "../../hooks"
import { FilterBar } from "../components"
import { Grid } from "@mui/material"

const LazyPost = lazy(() => import('../components/PostItem'));


export const DesignsPage: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    return (
        <Grid container>
            <FilterBar />
            <Grid container justifyContent="space-between" mt={5}>
                {posts.map(post => (
                    <Suspense fallback={<h1>LOADING...</h1>}>
                        < LazyPost key={post.id}  {...post} />
                    </Suspense>
                ))}
            </Grid>
        </Grid>

    )
}
