import { getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, onAuthStateChanged, signOut, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Firebase/FirebaseInitialization";
initializeAuthentication();
const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [islogin, setislogin] = useState(false)
    const googleSignIn = () => {
        return signInWithPopup(auth, googleprovider)
        // .then(result => {
        //     setUser(result.user);
        // })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])
    const handleemail = e => {
        setemail(e.target.value);
        console.log(email)

    }
    const handlepassword = e => {
        setpassword(e.target.value);
        console.log(password)
    }
    const togglelogin = e => {
        setislogin(e.target.checked)
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                // verifyemail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);

            })

    }
    const loginProcess = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log(user);
                setError('')
            })
            .catch(error => {
                setError('Password or Email did not match')
            })

    }
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase')
            return;
        }
        islogin ? loginProcess(email, password) : createNewUser(email, password);
    }
    const handleName = e => {
        setName(e.target.value)
        console.log(name)

    }
    return {
        logout,
        googleSignIn,
        user,
        handleemail,
        handlepassword,
        togglelogin, islogin, handleSignUp, handleName, error, loginProcess
    }

}
export default useFirebase;

