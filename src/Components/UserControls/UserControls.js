import React from 'react';

const userControls = (props) =>{
    return(
        <button style={{
            borderColor:"black",
            background:"border-box",
            borderRadius:"3px",
            padding:"10px",
            margin:"2px"
        }}>{props.value}</button>
    );
}

export default userControls;