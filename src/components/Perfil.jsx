import React from 'react';
import { useParams } from 'react-router-dom';

const Perfil = () => {
    const { nome } = useParams();
    // Suponha que você tenha uma lista de cuidadores com mais detalhes
    const cuidadores = [
        { nome: "José", age: 25, xp: 2, descricao: "Descrição do José" },
        { nome: "Maria", age: 38, xp: 4, descricao: "Descrição da Maria" },
        { nome: "Marcos", age: 29, xp: 3, descricao: "Descrição do Marcos" },
        { nome: "João", age: 45, xp: 10, descricao: "Descrição do João" }
    ];

    const cuidador = cuidadores.find(c => c.nome.toLowerCase() === nome.toLowerCase());

    if (!cuidador) {
        return <div>Cuidador não encontrado</div>;
    }

    return (
        <div>
            <h1>Perfil de {cuidador.nome}</h1>
            <p>Idade: {cuidador.age}</p>
            <p>Experiência: {cuidador.xp} anos</p>
            <p>{cuidador.descricao}</p>
        </div>
    );
}

export default Perfil;
