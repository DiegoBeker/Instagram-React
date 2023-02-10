import { useState } from "react";



export default function Usuario(props){

  const [usuario, setUsuario] = useState(props.usuario);
  const [imgUsuario, setImgUsuario] = useState(props.img);

  function alterarNome(){
    let nome = prompt("Digite o nome desejado: ");
    while(!nome)
        nome = prompt("Digite um nome válido!");
    setUsuario(nome);
  }

  function alterarFoto(){
    let novaImg = prompt("Coloque aqui a url da imagem: ");
    while(!novaImg)
        novaImg = prompt("Digite uma url válida!");
    setImgUsuario(novaImg);
  }

    return (
        <div class="usuario">
          <img data-test="profile-image" onClick = {alterarFoto} src={imgUsuario} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong data-test="name">{usuario}</strong>
              <ion-icon data-test="edit-name" onClick = {alterarNome} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}