import React from 'react';

import Handholder from './Handholder/Handholder';

const playArea = () =>{
    return(
        <div style={{
            display:"flex",
            alignContent:"center",
            justifyContent:"space-around"
        }}>
            <Handholder/>
            <p>vs</p>
            <Handholder/>
        </div>
    );
}

export default playArea;