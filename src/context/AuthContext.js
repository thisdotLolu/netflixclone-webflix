import { createContext,useContext,useEffect, useState } from "react";
import { auth,db } from "../firebase/firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {setDoc, doc} from 'firebase/firestore'


const AuthContext=createContext()

export function AuthContextProvider({children}){

    const[user,setUser]=useState({})
    const[pending,setPending]=useState(false)
    const[error,setError]=useState(null)



    function signUp (email,password,displayName){
        createUserWithEmailAndPassword(auth,email,password,displayName)
        setDoc(doc(db, 'users', email),{
            savedShows:[]
        })
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe();
    })

    return(
        <AuthContext.Provider value={{error,pending,setError,setPending,signUp,user,logIn,logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}