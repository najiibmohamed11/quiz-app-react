import {useState,useContext,useEffect} from "react"
import './App.css';
import Mainmenu from "./component/Mainmenu"
import End from "./component/End"
import Quiz from "./component/Quiz"
import {QuizContext} from "./helper/Contect"
import Hieghscore from "./component/Hieghscore";
import Auth from "./component/Auth";
import Auth1 from "./component/Auth1";
import {auth,googleProvider} from "./config/firbase"
import {createUserWithEmailAndPassword,signInWithPopup,signOut}from "firebase/auth"

function App() {
  const[gameState,setGameState]=useState("auth")
  const[score,setScore]=useState(0)
  const[questionLength,setQuestionLength]=useState(0)
  const[visibility,setVisibility]=useState("")
  const[user,setUser]=useState("")
  const[localStorage,setLocalStorage]=useState('')
  


   



  return (

      <div className="App">
        <h1>quize app</h1>
        <QuizContext.Provider value={{setUser,user,visibility,setVisibility,gameState,setGameState ,setScore,score,questionLength,setQuestionLength}}>

        
      
        {
            gameState==="auth" && <Auth />
          }
        {
            gameState==="sign in" && <Auth1 />
          }
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
