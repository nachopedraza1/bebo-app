import { useState, useEffect } from 'react';
import { useCustomSelector } from "../../hooks"

import { TransitionPage } from "../Layout/TransitionPage";
import { FilterBar, PostItem } from "../components"
import { Grid } from "@mui/material"

import { Post } from "../../Interfaces/interfaces";

export const DesignsPage: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    const [postFilter, setPostFilter] = useState<Post[]>(posts);

    const onFilter = (categoryFilter: string, order?: string): void => {
        if (categoryFilter === "All") return setPostFilter(posts);
        const filterPosts = posts.filter(({ category }) => category === categoryFilter);
        setPostFilter(filterPosts);
    }

    useEffect(() => {
        setPostFilter(posts)
    }, [posts])

    return (
        <TransitionPage>
            <Grid container>
                <FilterBar onFilter={onFilter} />
                <Grid container justifyContent="space-between" mt={5}>
                    {postFilter.map(post => (
                        <PostItem key={post.id}  {...post} />
                    ))}
                </Grid>
            </Grid>
        </TransitionPage>
    )
}