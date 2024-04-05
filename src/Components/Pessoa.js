function Pessoa(props){
    return (
        <div>
            <h1> Meu Terceiro Componente</h1>
            <img src={props.foto} alt={props.nome} />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>

        </div>
    )
}

export default Pessoa