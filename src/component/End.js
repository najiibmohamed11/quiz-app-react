
import {QuizContext} from "../helper/Contect"
import { Questions } from "../helper/QuestionBank"
import { useContext,useState } from "react"
function End(){
    const{setScore,score,setGameState,questionLength}=useContext(QuizContext)
   

        const storedScore = localStorage.getItem('highScore');
        if (score>storedScore) {
            localStorage.setItem("highScore",score)
          
        }
    
   
    function resit(){
        
            setScore(0)

            setGameState("menu")
            

       
    }

    return(
        <div className="end">
            <h1>ended the quize </h1>
            <h3>{score}/{questionLength}</h3>
            <button onClick={resit}>restart the quiz</button>

        </div>
    )
}


export default End