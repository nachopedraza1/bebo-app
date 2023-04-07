import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../Firebase/config";

const googleProvider = new GoogleAuthProvider();

export const onGoogleLogin = async () => {
    try {
        const resp = await signInWithPopup(FirebaseAuth, googleProvider);
        const { uid, displayName, email, photoURL } = resp.user;
        return { ok: true, uid, displayName, email, photoURL }
    } catch (error: any) {
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutUser = async () => {
    return await FirebaseAuth.signOut();
}