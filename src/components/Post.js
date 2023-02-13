import { useState } from "react";

export function Post(props){
    const[iconeSalvar, setIconeSalvar] = useState("bookmark-outline");
    const[iconeCurtir, setIconeCurtir] = useState("heart-outline");
    const[cor, setCor] = useState("");
    const[curtidas, setCurtidas] = useState(props.curtidas);

    return (
        <div data-test="post" className="post">
            <div className="topo">
              <div className="usuario">
                <img src={props.imgTopo} alt={props.usuario}/>
                {props.usuario}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img 
                data-test="post-image"
                src={props.imgPost} 
                alt="imagem do post"
                onDoubleClick= {() => {if(iconeCurtir === "heart-outline"){setIconeCurtir("heart");setCor("vermelho");setCurtidas(curtidas + 1);}}}
              />
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon 
                    data-test="like-post"
                    class = {cor} 
                    name={iconeCurtir}
                    onClick = {() => {
                      if(iconeCurtir === "heart-outline"){
                        setIconeCurtir("heart");
                        setCor("vermelho");
                        setCurtidas(curtidas + 1);
                      }else{
                        setIconeCurtir("heart-outline");
                        setCor("");
                        setCurtidas(curtidas - 1);
                      }
                    }}
                  >
                  </ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon
                    data-test="save-post" 
                    onClick = {() => iconeSalvar === "bookmark-outline" ? setIconeSalvar("bookmark") : setIconeSalvar("bookmark-outline")} 
                    name={iconeSalvar}
                  >
                  </ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.imgBottom} alt=""/>
                <div className="texto">
                  Curtido por <strong>{props.curtidoPor}</strong> e <strong data-test="likes-number">outras {new Intl.NumberFormat('de-DE').format(curtidas)} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    );
}

