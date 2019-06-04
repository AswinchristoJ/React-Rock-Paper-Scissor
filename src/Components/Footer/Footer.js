import React from 'react';

const footer = () => {
    return (
        <div style={{
            fontSize:"15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "self-start",
            padding: "20px 10px",
            marginTop:"15vh",
            fontWeight:"400",
            color:"#423b3b",
        }}>
            <span>Aswin Christo</span>
            <span style={{
                fontStyle:"italic",
                fontFamily:"TimesNewRoman"
            }}>azooschristo@gmail.com</span>
        </div>
    );
}

export default footer;