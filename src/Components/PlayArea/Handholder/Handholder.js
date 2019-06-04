import React from 'react';

import botRockImg from '../../../assets/images/botRock.png'
import botPaperImg from '../../../assets/images/botPaper.png'
import botScissorImg from '../../../assets/images/botScissor.png'
import playerRockImg from '../../../assets/images/playerRock.png'
import playerPaperImg from '../../../assets/images/playerPaper.png'
import playerScissorImg from '../../../assets/images/playerScissor.png'

import './Handholder.css';

const images = {
    botPaper: botPaperImg,
    botRock: botRockImg,
    botScissor: botScissorImg,
    playerRock: playerRockImg,
    playerPaper: playerPaperImg,
    playerScissor: playerScissorImg
}

const handHolder = (props) => {

    let tempClassName = ''

    if (props.spin) {
        tempClassName = "image"
    } else {
        tempClassName = ''
    }

    return (
        <div style={{
            width: "25vw",
        }} >
        <div style={{
            margin:"20px",
            fontWeight:"bolder",
        }}>{props.header}</div>
            <img className={tempClassName} src={images[props.hand]} alt={props.hand} style={{
                objectFit: "scale-down",
                width: "inherit"
            }} />
        </div>
    );
}

export default handHolder;