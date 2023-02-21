import {auth,googleProvider} from "../config/firbase"
import {QuizContext} from "../helper/Contect"
import {signInWithEmailAndPassword}from "firebase/auth"
import { useState,useContext } from "react"

const Auth1 = () => {
    const{setGameState}=useContext(QuizContext)

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")


    async function handleSubmit(){
        await signInWithEmailAndPassword(auth,email,password)
        setGameState("menu")}


        function signIn(){
            setGameState("auth")
           }
    return (
        <div className="auth">
            <h1>welcome back</h1>
            <input className="input1" placeholder="email..."onChange={
            (e)=>setEmail(e.target.value)}/>
            <input placeholder="password..."onChange
            ={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>sign in</button>
            <p>or create an accoun<button className="siginbtn" onClick={signIn}>sign up</button></p>
        </div>
    );
};

export default Auth1;