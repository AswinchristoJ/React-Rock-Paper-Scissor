import React from 'react';

import Handholder from './Handholder/Handholder';

const playArea = () =>{
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around"
        }}>
            <Handholder hand="botRock"/>
            <p>vs</p>
            <Handholder hand="playerRock"/>
        </div>
    );
}

export default playArea;