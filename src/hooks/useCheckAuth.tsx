import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "./useRedux";
import { User, onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../Firebase/config";
import { login, logout } from "../redux/authSlice";

export const useCheckAuth = () => {

    const dispatch = useCustomDispatch();

    const { status } = useCustomSelector(state => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            const { email, displayName, uid, photoURL } = user as User;
            if (!user) return dispatch(logout({}));
            dispatch(login({ email, displayName, uid, photoURL }));
        });
    }, [])

    return status;
}
