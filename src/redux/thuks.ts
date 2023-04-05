import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from './store';

import { logoutUser, onGoogleLogin } from '../auth/Providers/Providers';
import { checkingCredentials, login, logout } from './authSlice';

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

