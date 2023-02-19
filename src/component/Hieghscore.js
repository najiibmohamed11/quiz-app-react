import React, { useState } from 'react';

export default function Hieghscore(props) {
    const [data,setData]=useState("")
    const storedData = localStorage.getItem('highScore');

    return (
        
        <div className='Hieghscore'>
            <button style={{fontSize:"30px"}}>your highestScore: {storedData}</button>
            
            
        </div>
    );
}
