import React from 'react';

import botRockImg from '../../../assets/images/botRock.png'
import botPaperImg from '../../../assets/images/botPaper.png'
import botScissorImg from '../../../assets/images/botScissor.png'
import playerRockImg from '../../../assets/images/playerRock.png'
import playerPaperImg from '../../../assets/images/playerPaper.png'
import playerScissorImg from '../../../assets/images/playerScissor.png'

const images = {
    botPaper: botPaperImg,
    botRock: botRockImg,
    botScissor: botScissorImg,
    playerRock: playerRockImg,
    playerPaper: playerPaperImg,
    playerScissor: playerScissorImg
}

const handHolder = (props) => {
    return (
        <div style={{
            height: "300px",
            width: "300px",
            objectFit: "contain"
        }} >
            <img src={images[props.hand]} alt={props.hand} height="300px" />
        </div>
    );
}

export default handHolder;