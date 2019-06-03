import React from 'react';

import Handholder from './Handholder/Handholder';

const playArea = (props) =>{
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around"
        }}>
            <Handholder spin={props.spin} hand="botRock"/>
            <p>vs</p>
            <Handholder spin={props.spin} hand="playerRock"/>
        </div>
    );
}

export default playArea;