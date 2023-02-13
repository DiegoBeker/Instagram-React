import { Post } from "./Post";

const posts = [
  {
    imgTopo: "assets/img/meowed.svg",
    usuario: "meowed",
    imgPost: "assets/img/gato-telefone.svg",
    imgBottom: "assets/img/respondeai.svg",
    curtidoPor: "respondeai",
    curtidas: 101523
  },
  {
    imgTopo: "assets/img/barked.svg",
    usuario: "barked",
    imgPost: "assets/img/dog.svg",
    imgBottom: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
    curtidas: 99159
  },
  {
    imgTopo: "assets/img/barked.svg",
    usuario: "barked2",
    imgPost: "assets/img/dog.svg",
    imgBottom: "assets/img/adorable_animals.svg",
    curtidoPor: "adorable_animals",
    curtidas: 99159
  }
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((p) => {
        return (
          <Post
            key={p.usuario}
            imgTopo={p.imgTopo}
            usuario={p.usuario}
            imgPost={p.imgPost}
            imgBottom={p.imgBottom}
            curtidoPor={p.curtidoPor}
            curtidas={p.curtidas}
          />);
      })}
    </div>
  );
}