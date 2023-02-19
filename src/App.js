import {useState,useContext} from "react"
import './App.css';
import Mainmenu from "./component/Mainmenu"
import End from "./component/End"
import Quiz from "./component/Quiz"
import {QuizContext} from "./helper/Contect"
import Hieghscore from "./component/Hieghscore";
function App() {
  const[gameState,setGameState]=useState("menu")
  const[score,setScore]=useState(0)
  const[questionLength,setQuestionLength]=useState(0)

   
  return (

      <div className="App">
        <h1>quize app</h1>
        <QuizContext.Provider value={{gameState,setGameState ,setScore,score,questionLength,setQuestionLength}}>

        
      
        {
            gameState==="menu" && <Mainmenu />
          }
        {
            gameState==="End" && <End/>
          }
        {
            gameState==="Quiz" && <Quiz/>
          }
        {
            gameState==="score" && <Hieghscore/>
          }
  
          </QuizContext.Provider>
      </div>

  );
}

export default App;
