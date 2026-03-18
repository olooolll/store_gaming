import React from "react";

function ListaSuspensa({ label, valor, itens, aoAlterado }) {
    const aoEscolhido = (evento) => {
        aoAlterado(evento.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <select value={valor || ""} onChange={aoEscolhido}>
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