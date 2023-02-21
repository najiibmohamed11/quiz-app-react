 import {auth,googleProvider} from "../config/firbase"
 import {QuizContext} from "../helper/Contect"
 import { FcGoogle } from 'react-icons/fc';
 import {createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged}from "firebase/auth"
import { useState,useContext,useEffect } from "react"

 const Auth=()=>{
    const{setGameState,user,setUser}=useContext(QuizContext)

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

        if (user==undefined){
          setGameState("auth")
      
      }else{
          setGameState("menu")
      
      }
      
       function signIn(){
        setGameState("sign in")
       }



   async function handleSubmit(){
    await createUserWithEmailAndPassword(auth,email,password)
    setGameState("menu")}

    async function handleGoogle(){

        await signInWithPopup(auth,googleProvider)
        setGameState("menu")

    }
    console.log(auth?.currentUser?.email)


    return(
        <dev className="auth">
            <button onClick={handleGoogle} className="btn"><FcGoogle style={{ fontSize:"large" }}/>sign up with google</button>
            <input className="input1" placeholder="email..."onChange={
            (e)=>setEmail(e.target.value)}/>
            <input placeholder="password..."onChange
            ={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>sign up</button>
            <p>or i have alredy have an account <button className="siginbtn" onClick={signIn}>sign in</button></p>
        </dev>
    )
}
export default Auth;