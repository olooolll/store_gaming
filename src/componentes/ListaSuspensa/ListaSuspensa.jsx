import React from "react";
import "./ListaSuspensa.css"

function ListaSuspensa({ label, valor, itens, aoAlterado, classe }) {
    const aoEscolhido = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div className={`lista-suspensa ${classe || ""}`}>
            <label>{label}</label>
            <select value={valor} onChange={aoEscolhido}>
                <option value="" disabled>
                    Selecione...
                </option>

                {itens.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ListaSuspensa;