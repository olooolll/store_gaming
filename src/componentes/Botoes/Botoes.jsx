import React from "react";
import "./Botoes.css"

function Botao(props) {
    return (
        <button className={props.className}>
            {props.children}
        </button>
    );
}

function Radio(props){
    return(
        <div className="radio-group">
            {props.itens.map((item, i) => (
                <button key={i}>
                    {item}
                </button>
            ))}
        </div>
    );
}

export default Botao;