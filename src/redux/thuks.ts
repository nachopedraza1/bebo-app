import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from './store';

import { logoutUser, onGoogleLogin, getPosts } from '../Providers';
import { checkingCredentials, login, logout, loadPosts } from './slices';

export const startLogin = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await onGoogleLogin();
        if (!resp.ok) return dispatch(logout(resp))
        dispatch(login(resp))
    }
}

export const startLogout = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        await logoutUser();
        dispatch(logout({}));
    }
}

export const startLoadPost = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        const posts = await getPosts();
        dispatch(loadPosts(posts))
    }
}

