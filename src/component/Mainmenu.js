import {useContext, useState} from 'react'
import {QuizContext} from "../helper/Contect"
import {createUserWithEmailAndPassword,signInWithPopup,signOut}from "firebase/auth"
import {auth,googleProvider} from "../config/firbase"

import "../App"
function Mainmenu(){


console.log(auth?.currentUser?.email)

    const{setVisibility,visibility,gameState,setGameState,setQuestionLength,questionLength,score}=useContext(QuizContext)
    if(localStorage.getItem('highScore')==null){
        setVisibility("hidden")

    }else{
        setVisibility("visible")
    }
    function handleSelect(event) {
        setQuestionLength(event.target.value)


    }
    async function logOut(){
        await signOut(auth)
        setGameState("auth")



    }
    

    return(
        <div className="menu">
             <select name="cars" id="cars" className='drop-dhown' onChange={handleSelect}>
                <option value="14">chose range of Questions </option>
                <option value="14">14 Questions</option>
                <option value="10">10 Questions</option>
                <option value="5">5 Questions</option>
               
             </select>
            <button onClick={()=>setGameState("Quiz")}>start quiz</button>
            <button style={{visibility: `${visibility}`}} onClick={()=>setGameState("score")}>highScore</button>
            <div className='imges'>
            
            <button onClick={logOut}><img src={`${auth?.currentUser?.photoURL}`}/>log out</button>
            </div>
            
            
 
        </div>
    )
}


export default Mainmenu