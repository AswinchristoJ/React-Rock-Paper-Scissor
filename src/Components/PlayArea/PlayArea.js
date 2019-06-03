import React from 'react';

import Handholder from './Handholder/Handholder';

const playArea = (props) =>{
    return(
        <div style={{
            display:"flex",
            height:"40vh",
            alignItems:"flex-start",
            justifyContent:"space-around"
        }}>
            <Handholder header="BOT" spin={props.spin} hand={props.bot}/>
            <p>vs</p>
            <Handholder header="YOU" spin={props.spin} hand={props.player}/>
        </div>
    );
}

export default playArea;