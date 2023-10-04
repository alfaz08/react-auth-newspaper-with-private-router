import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext= createContext(null)

const AuthProviders = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading] =useState(true)
   


   const createUser = (email,password)=>{
    setLoading(true)
    
    return createUserWithEmailAndPassword(auth,email,password)
    
  }

  //authstatechange
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    }); 

    return ()=>{
      unsubscribe()
    }
   },[])
   
   //login
   const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
    
   }


   //signout
   const logOut =()=>{
    setLoading(true)
    return signOut(auth)
   }


  





   const authInfo = {
    user,
    createUser,
    loading,
    logOut,
    signIn
   }

  return (
    <div>
       <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>    
    </div>
  );
};

export default AuthProviders;