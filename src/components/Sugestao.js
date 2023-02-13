export function Sugestao(props){
    return(
        <div className="sugestao">
            <div className="usuario">
              <img src={props.img} alt={props.nome} />
              <div className="texto">
                <div className="nome">{props.nome}</div>
                <div className="razao">{props.info}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
    );
}