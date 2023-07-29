const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
// aqui estamos criando uma arrow function com o objetivo de adicionar a classe jump e remover a classe jump na const mario.
// 0 500 é o tempo definido para a função, que no caso foi 500ms.

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  // onde tiver px no bottom, quero deixar sem nada, pq não quero usar a medida de bottom no

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 112) {
    // tem que cobrir todas estas condições para dar gameover:
    // o marioposition abaixo de 112 (que é o tamanho do cano) significa que está tocando no cano
    // pipe position tem que ser menor ou igual a 120 e maior que 0.
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    // vai tirar as animações do cano e colocar a posição definida anteriormente
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    // vai tirar a animação do mario e adicionar a posição atual do mario
    mario.src = "img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    // vai tirar a imagem do mario e trocar por outra, definir a largura dela e a margem da esquerda
    clearInterval(loop);
    // por fim, vai parar o intervalo da const loop.
  }
}, 10);
// 10 é o intervalo dentro do setInterval.

document.addEventListener("keydown", jump);
// quando tiver uma tecla abaixada (ou seja, qualquer tecla que eu clicar), executará a ação de pulo
