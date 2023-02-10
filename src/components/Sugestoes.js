import { Sugestao } from "./Sugestao";

const sugestoes = [
  { img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", info: "Segue você" },
  { img: "assets/img/chibirdart.svg", nome: "chibirdart", info: "Segue você" },
  { img: "assets/img/adorable_animals.svg", nome: "adorable_animals", info: "Segue você" },
  { img: "assets/img/smallcutecats.svg", nome: "smallcutecats", info: "Segue você" },
  { img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", info: "Novo no Instagram" }
];

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => <Sugestao img={s.img} nome={s.nome} info={s.info} />)}
    </div>
  );
}