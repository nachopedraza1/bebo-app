import { useEffect } from "react";

import { useCustomDispatch, useCustomSelector } from "./useRedux";
import { login, logout } from "../redux/slices";

import { User, onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../Firebase/config";

export const useCheckAuth = () => {

    const dispatch = useCustomDispatch();

    const { status } = useCustomSelector(state => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (!user) return dispatch(logout({}));
            const { email, displayName, uid, photoURL } = user as User;
            dispatch(login({ email, displayName, uid, photoURL }));
        });
    }, [])

    return status;
}
