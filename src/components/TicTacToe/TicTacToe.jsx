import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data=["","","","","","","","",""];

const TicTacToe = () => {
    
    const [count,setcount]=useState(0);
    const [lock,setlock]=useState(false);
    let titleRef=useRef(null);

const Toggle=(e,num)=>{
    if(lock || data[num]!=""){
        return 0;
    }
    if(count%2===0){
        e.target.innerHTML=`<img src='${cross_icon}'/>`;
        data[num]="x";
        setcount(count+1);
    }
    else{
        e.target.innerHTML=`<img src='${circle_icon}'/>`;
        data[num]="o";
        setcount(count+1);
    }

    checkwin();
}

const checkwin=()=>{
    if(data[0]!=="" && data[0]===data[1] && data[1]===data[2]){
        won(data[0]);
    }
    else if(data[3]!=="" && data[3]===data[4] && data[4]===data[5]){
        won(data[3]);
    }
    else if(data[6]!=="" && data[6]===data[7] && data[7]===data[8]){
        won(data[6]);
    }
    else if(data[0]!=="" && data[0]===data[3] && data[3]===data[6]){
        won(data[0]);
    }
    else if(data[1]!=="" && data[1]===data[4] && data[4]===data[7]){
        won(data[1]);
    }
    else if(data[2]!=="" && data[2]===data[5] && data[5]===data[8]){
        won(data[2]);
    }
    else if(data[0]!=="" && data[0]===data[4] && data[4]===data[8]){
        won(data[0]);
    }
    else if(data[2]!=="" && data[2]===data[4] && data[4]===data[6]){
        won(data[2]);
    }
}

const won=(winner)=>{
    setlock(true);
     
    if(winner==="x"){
        titleRef.current.innerHTML=`congratulations: <img src=${cross_icon} " style="width:70px; height:70px; margin:0 8px; object-fit:contain; font-weight:bold;"/> win`;
    }
    else{
        titleRef.current.innerHTML=`congratulations: <img src=${circle_icon} " style="width:70px; height:70px; margin:0 8px; object-fit:contain; font-weight:bold;"/> win`;
    }
}

const resetgame = () => {
    data = ["","","","","","","","",""];  // clear board state
    setcount(0);
    setlock(false);
    titleRef.current.innerHTML = "Tic Tac Toe Game In <span> React</span>";

    // clear the boxes’ innerHTML
    document.querySelectorAll(".boxes").forEach(box => box.innerHTML = "");
}


  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span> React</span></h1>
        <div className='board'>
            <div className="row1">
                <div className="boxes" onClick={(e)=>{Toggle(e,0)}}></div>
                <div className="boxes" onClick={(e)=>{Toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{Toggle(e,2)}}></div>
            </div> 
             <div className="row2">
                <div className="boxes" onClick={(e)=>{Toggle(e,3)}}></div>
                <div className="boxes" onClick={(e)=>{Toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{Toggle(e,5)}}></div>
            </div>
             <div className="row3"> 
                <div className="boxes" onClick={(e)=>{Toggle(e,6)}}></div>
                <div className="boxes" onClick={(e)=>{Toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{Toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={resetgame}>Reset</button>
    </div>
  )
}

export default TicTacToe;