import { useState } from 'react';
import Sugestoes from './Sugestoes';
import Usuario from './Usuario';


export function SideBar() {
    const usuario = "catanacomics";
    const imgUsuario = "assets/img/catanacomics.svg";

    return (
        <div className='sidebar'>
            <Usuario usuario = {usuario} img = {imgUsuario}/>
            <Sugestoes />
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}