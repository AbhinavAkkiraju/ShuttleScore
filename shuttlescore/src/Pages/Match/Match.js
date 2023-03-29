import "./Match.css"
import React,{useState} from "react";

function Match() {
    const [date,setDate]=useState();
    console.log("Date",date);
    return(
        <div className="matchPage">
            <div className="matchheader">
                <h1>Add New Match</h1>
            </div>
            <div className="matchdescription">
                <h2>Enter the following information to add a new match to your log!</h2>
            </div>
            <div className="opponentNameTitle"><h2>Opponent Name:</h2></div>
            <div className="opponent">
                <form className="opponentSearch">
                    <input type="text" className="borders" placeholder="Enter Opponent Name..." id="opponentName"/>
                </form>
            </div>
            <div className="dateTitle"><h2>Date of Match:</h2></div>
            <div className="dateofmatch">
                <form className="dateBox">
                    <h1> {date} </h1>
                    <input type="date" onChange={e=>setDate(e.target.value)} id="dom"/>
                </form>
            </div>
            <div className="userScoreTitle"><h2>Your Score:</h2></div>
            <div className="userScore">
                <form className="userScoreSearch">
                    <input type="text" className="userScoreBorder" placeholder="Enter Your Points..." id="userpoints"/>
                </form>
            </div>
            <div className="opponentScoreTitle"><h2>Opponent Score:</h2></div>
            <div className="opponentScore">
                <form className="opponentScoreSearch">
                    <input type="text" className="opponentScoreBorder" placeholder="Enter Your Opponent's Points..." id="opponentpoints"/>
                </form>
            </div>
            <div className="addbutton">
                <button className="btn">Add Match</button>
            </div>
        </div>
    );
}

export default Match;