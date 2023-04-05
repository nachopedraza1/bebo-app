import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Auth {
    ok?: boolean,
    uid?: string | null,
    email?: string | null,
    status?: string | "checking",
    displayName?: string | null,
    photoURL?: string | null,
    errorMessage?: string | null,
}

const initialState: Auth = {
    ok: true,
    uid: null,
    email: null,
    status: "checking",
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<Auth>) => {
            state.uid = payload.uid;
            state.email = payload.email;
            state.status = "authenticated";
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }: PayloadAction<Auth>) => {
            state.uid = null;
            state.email = null;
            state.status = "not-authenticated";
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = "checking"
        }
    }
});

export const { login, logout, checkingCredentials } = AuthSlice.actions;

