import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/FirebaseInitialization";
initializeAuthentication();
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                setUser(result.user);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        logout,
        googleSignIn,
        user
    }

}
export default useFirebase;

