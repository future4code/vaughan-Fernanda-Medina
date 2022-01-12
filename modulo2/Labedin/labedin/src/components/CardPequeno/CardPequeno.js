import React from 'react';
import './CardPequeno.css'

function  CardPequeno (props) {
    return < div className= "smallcard-container" >
       <img src={ props.imagem } />
        <p className="texto-negrito">{props.info} </p>
        <p> {props.info2}</p>
    </div>
    
}
export default CardPequeno;