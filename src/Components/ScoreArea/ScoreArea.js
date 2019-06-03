import React from 'react';

import './ScoreArea.css';

const scoreArea = (props) => {
    let botTempClass = ""
    let playerTempClass = ""
    
    if (props.botFaded && props.playerFaded) {
        botTempClass = "fadeIn"
        playerTempClass = "fadeIn"
    } else if (props.botFaded) {
        botTempClass = "fadeIn"
    } else if (props.playerFaded) {
        playerTempClass = "fadeIn"
    }else{
        botTempClass = ""
        playerTempClass = ""
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "ridge",
            borderColor: "black",
            borderWidth: "1px",
            borderRadius: "3px",
            margin: "2px",
            padding: "10px"
        }}>
            <div><span>Score : <label className={botTempClass}>{props.botPoints}</label> / 5</span></div>
            <div><span>Score : <label className={playerTempClass}>{props.playerPoints}</label> / 5</span></div>
        </div>
    );
}

export default scoreArea;