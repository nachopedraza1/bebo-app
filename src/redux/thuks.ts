import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from './store';

import { googleLogin } from '../auth/Providers/Providers';
import { checkingCredentials, login, logout } from './authSlice';

export const startLogin = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const resp = await googleLogin();
        if (!resp.ok) { return dispatch(logout(resp)) }
        dispatch(login(resp))
    }
}

