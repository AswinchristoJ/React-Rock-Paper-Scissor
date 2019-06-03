import React from 'react';

import win from '../../../assets/images/win.png'
import lose from '../../../assets/images/lose.png'
import botRock from '../../../assets/images/botRock.png'
import botPaper from '../../../assets/images/botPaper.png'
import botScissor from '../../../assets/images/botScissor.png'
import playerRock from '../../../assets/images/playerRock.png'
import playerPaper from '../../../assets/images/playerPaper.png'
import playerScissor from '../../../assets/images/playerScissor.png'

const handHolder = (props) =>{
    let img = props.hand
    console.log(img,typeof(img))
    return(
        <div style={{
            height:"300px",
            width:"300px",
            objectFit:"contain"
        }} ><img src={img} alt={props.hand} height="300px"/></div>
    );
}

export default handHolder;