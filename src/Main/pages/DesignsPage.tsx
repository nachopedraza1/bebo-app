import { useState, useEffect } from 'react';
import { useCustomSelector } from "../../hooks"

import { TransitionPage } from "../Layout/TransitionPage";
import { FilterBar, PostItem } from "../components"
import { Grid } from "@mui/material"

import { Post } from "../../Interfaces/interfaces";

export const DesignsPage: React.FC = () => {

    const { posts } = useCustomSelector(state => state.posts);

    const [postFilter, setPostFilter] = useState<Post[]>(posts);

    const onFilter = (categoryFilter: string): void => {
        if (categoryFilter === "All") return setPostFilter(posts);
        const filterPosts = posts.filter(({ category }) => category === categoryFilter);
        setPostFilter(filterPosts);
    }

    const orderBy = (order: string): void => {
        const orderByPrice = postFilter.slice().sort((a, b): any => {
            const aPrice = parseFloat(a.price || "0");
            const bPrice = parseFloat(b.price || "0");
            if (order === "asc") return bPrice - aPrice;
            if (order === "des") return aPrice - bPrice;
        });
        setPostFilter(orderByPrice)
    }

    useEffect(() => {
        setPostFilter(posts)
    }, [posts])

    return (
        <TransitionPage>
            <Grid container>
                <FilterBar onFilter={onFilter} orderBy={orderBy} />
                <Grid container gap={5.9} mt={5}>
                    {postFilter.map(post => (
                        <PostItem key={post.id}  {...post} />
                    ))}
                </Grid>
            </Grid>
        </TransitionPage>
    )
}