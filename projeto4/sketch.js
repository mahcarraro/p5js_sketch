let costas1;
let costas2;

function preload() {
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
}

function setup() {
  createCanvas(1024, 576);
}

function draw() {
  let tempo = millis() % 1000
  if(tempo > 500) {
    image(costas2, 0, 0);
  } else {
    image(costas1, 0, 0);
  }

  // origem: 180, 100, 450, 720
  // tamanho_x, tamanho_y colocado
  // a_partir_de_x, a_partir_de_y da origem
  // tamanho_x, tamanho_y da original
  image(quieto, 50, 420, 100, 160, 180, 100, 450, 720);
  image(quieto, 150, 420, 100, 160, 180, 100, 450, 720);
  image(quieto, 250, 420, 100, 160, 180, 100, 450, 720);

}