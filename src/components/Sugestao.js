export function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={props.img} alt={props.nome} />
              <div class="texto">
                <div class="nome">{props.nome}</div>
                <div class="razao">{props.info}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    );
}