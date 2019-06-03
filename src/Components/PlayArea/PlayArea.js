import React from 'react';

import Handholder from './Handholder/Handholder';

const playArea = (props) =>{
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around"
        }}>
            <Handholder spin={props.spin} hand={props.bot}/>
            <p>vs</p>
            <Handholder spin={props.spin} hand={props.player}/>
        </div>
    );
}

export default playArea;