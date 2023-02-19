import {useContext} from 'react'
import {QuizContext} from "../helper/Contect"
import {useState}from 'react'
import {Questions} from "../helper/QuestionBank"

import { AiOutlineArrowRight } from 'react-icons/ai';

function Quiz(){
    const[curantQuestion,setCurantQuestion]=useState(0)
    const[optionChosen,setOptionChosen]=useState("")
    

    const {score,setScore,setGameState,questionLength,setQuestionLength}=useContext(QuizContext)



    function clicked(){
  
            if(Questions[curantQuestion].answer==optionChosen){
                setScore(score+1)
                
                
            }
            setOptionChosen("")
            
        if(optionChosen!=""){    
            setCurantQuestion(curantQuestion+1)

        }
  
    }
    function finishQuiz(){
        setOptionChosen("")
       

        if(optionChosen==""){
            console.log("please fil the plank")
         

        }else{
            if(Questions[curantQuestion].answer==optionChosen){
                setScore(score+1)
                
            }
            setGameState("End")
        }
    

    }
    return(
        <div className="Quiz">
            <h2 style={{width:"80%"}}>{Questions[curantQuestion].prompt}</h2>
            <div className="options">
                <button onClick={()=>setOptionChosen("optionA")}>{Questions[curantQuestion].optionA}</button>
                <button onClick={()=>setOptionChosen("optionB")}>{Questions[curantQuestion].optionB}</button>
                <button onClick={()=>setOptionChosen("optionC")}>{Questions[curantQuestion].optionC}</button>
                <button onClick={()=>setOptionChosen("optionD")}>{Questions[curantQuestion].optionD}</button>
            </div>
            <div className='footerBtn'>

            {
                curantQuestion==questionLength? 
                <button  onClick={finishQuiz}  >finesh <AiOutlineArrowRight style={{textAlign:'center'
                }}/> </button>:<button className='finish' onClick={clicked}>next<AiOutlineArrowRight/> </button>

            }



            </div>
        
            



        </div>
        
    )
}


export default Quiz