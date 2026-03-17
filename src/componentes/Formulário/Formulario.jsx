import React from "react";
import CampoTexto from "../CampoTexto/CampoTexto.jsx";

const Formulario = () => {
    return (
        <section>
            <form>
                <CampoTexto label="Seção" placeholder="Informe o nome do produto"/>
                <CampoTexto label="Marca" placeholder="Informe o preço do produto"/>
                <CampoTexto label="Nome" placeholder="Informe o categoria do produto"/>
                <CampoTexto label="Preço" placeholder="Informe o categoria do produto"/>
            </form>
        </section>
    );
}

export default Formulario;