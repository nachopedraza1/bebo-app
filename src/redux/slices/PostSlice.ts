import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, PostState } from '../../Interfaces/interfaces';

const initialState: PostState = {
    isLoading: true,
    posts: [],
}

export const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        loadPosts: (state, { payload }: PayloadAction<Post[]>) => {
            state.isLoading = false;
            state.posts = payload;
        },
    }
});

export const { loadPosts } = PostSlice.actions;