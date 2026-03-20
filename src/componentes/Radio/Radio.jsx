import React from "react";
import "./Radio.css";

function Radio(props) {
    const radios = props.itens;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="radio-container">
            {radios.map((radio) => {
                return (
                    <React.Fragment key={radio}>
                        <input
                            type="radio"
                            name={props.nome}
                            value={radio}
                            id={radio}
                            checked={props.valor === radio}
                            onChange={aoDigitado}
                        />
                        <label htmlFor={radio}>
                            {radio}
                        </label>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Radio;