import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(`${user} :: AUTHCONTEXT`);
            if(currentUser) {
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                });
            }
            else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}