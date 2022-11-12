import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../utility/firebase";

const provider = new GoogleAuthProvider();

const googleLogin = () =>
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });

const googleLogout = () =>
    signOut(auth).catch((error) => {
        alert(`Error: ${error}`);
    });

export { googleLogin, googleLogout };
