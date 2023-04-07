import { configureStore } from '@reduxjs/toolkit'

import { AuthSlice, PostSlice } from './slices';

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        posts: PostSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch