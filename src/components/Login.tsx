import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useCallback } from 'react';
import { fireApp } from '../firebase';

const provider = new GoogleAuthProvider();
const auth = getAuth(fireApp);

export const Login = () => {
    const handleClick = useCallback(() => {
        signInWithPopup(auth, provider);
    }, []);

    return <button onClick={handleClick}>Login</button>;
};
