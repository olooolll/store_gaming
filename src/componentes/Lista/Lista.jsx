import React from "react";

function Lista(props){
    return (
        <div>
            <h2>Lista de produtos</h2>

            {

            }

            {props.objetos.map((objeto, index) => (
                <div key={index}>
                    <strong>Nome: </strong> {objeto.secao} {objeto.marca} {objeto.nome} {objeto.preco}
                    <br />
                    <strong>Imagem:</strong> sem imagem
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Lista;