import {useContext} from 'react'
import {QuizContext} from "../helper/Contect"
import "../App"
function Mainmenu(){


    const{gameState,setGameState,setQuestionLength,questionLength,score}=useContext(QuizContext)
    function handleSelect(event) {
        setQuestionLength(event.target.value)
        console.log(questionLength)


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
            <button onClick={()=>setGameState("score")}>highScore</button>
 
        </div>
    )
}


export default Mainmenu