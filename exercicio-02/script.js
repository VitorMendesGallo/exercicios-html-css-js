function carregar() {
  let mensagem = document.querySelector("#msg");
  let imagem = document.querySelector("#img");
  let data = new Date();
  let mes = data.getMonth();

  switch (mes) {
    case 0:
    case 1:
    case 2:
      mensagem.innerHTML = "A estação atual é verão!";
      imagem.src = "./assets/verao.jpg";
      document.body.style.backgroundColor = "#6e9eac";
      break;
    case 3:
    case 4:
    case 5:
      mensagem.innerHTML = "A estação atual é outono!";
      imagem.src = "./assets/outono.jpg";
      document.body.style.backgroundColor = "#ab5000";
      break;
    case 6:
    case 7:
    case 8:
      mensagem.innerHTML = "A estação atual é inverno!";
      imagem.src = "./assets/inverno.jpg";
      document.body.style.backgroundColor = "#b2c3d5";
      break;
    case 9:
    case 10:
    case 11:
      mensagem.innerHTML = "A estação atual é primavera!";
      imagem.src = "./assets/primavera.jpg";
      document.body.style.backgroundColor = "#a0738a";
      break;
  }
}
