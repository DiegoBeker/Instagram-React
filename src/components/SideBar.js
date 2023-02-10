import { useState } from 'react';
import Sugestoes from './Sugestoes';
import Usuario from './Usuario'


export function SideBar() {
    const [usuario, setUsuario] = useState("catanacomics");
    const [imgUsuario, setImgUsuario] = useState("assets/img/catanacomics.svg");

    return (
        <div class='sidebar'>
            <Usuario usuario = {usuario} img = {imgUsuario}/>
            <Sugestoes />
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}