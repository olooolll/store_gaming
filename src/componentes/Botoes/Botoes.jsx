import React from "react";

function Botao(props) {
    return (
        <button>
            {props.children}
        </button>
    );
}

function Radio(props){
    return(
        <div>
            {props.itens.map(item => <button type="radio">{item}</button> )}
        </div>

    );
}

export default Botao;