import { useContext,useState } from "react"
import {QuizContext} from "../helper/Contect"
import { Questions } from "../helper/QuestionBank"



export default function Hieghscore(props) {
    const [data,setData]=useState("")
    const storedData = parseInt( localStorage.getItem('highScore'));
    const{setScore,setGameState,}=useContext(QuizContext)
    function resit(){
        
       

        setGameState("menu")
        

   
}

    return (
        
        <div className='Hieghscore'>
            <button style={{fontSize:"30px"}}>your highestScore: {storedData-1}</button>
            <button onClick={resit}>back to quiz</button>
            
            
        </div>
    );
}
