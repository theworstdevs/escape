
import React, { Component } from 'react';

    class Board extends React.Component {
       constructor(props) {
       super(props);

       }


       render(){
            let divs = [];
           for (let i = 0; i < 100; i++){
               divs.push(<div style={{width: "100px", height: "100px", border: "1px solid black"}}></div>)
           }
         return (
            <div style={{width: "1000px", height: "1000px", display: "flex"}}>
                {divs}
            </div>

         )
       }
     }

export default Board
