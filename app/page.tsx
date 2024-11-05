function gerarTitulo() {
  const titulos = [
    "Buracos negros",
    "Meteoros castastrofe",
    "A espada do norte",
    "Hajin",
    "Manhaws",
  ];
  const tituloAleatorio = titulos[Math.floor(Math.random() * titulos.length)];
  const tituloElement = document.createElement("h1");
  tituloElement.textContent = tituloAleatorio;
  document.body.appendChild(tituloElement);
}

// Função 2: Gerar subtítulo
function gerarSubtitulo() {
  const subtitulos = [
    "Uma jornada pelo escuro espaço.",
    "destruidores dos céus",
    "A história de Jin mu-won",
    "Eu vim parar dentro da minha novel",
    "Manhaws tem ganhado muita força nos ultimos anos",
  ];
  const subtituloAleatorio =
    subtitulos[Math.floor(Math.random() * subtitulos.length)];
  const subtituloElement = document.createElement("h2");
  subtituloElement.textContent = subtituloAleatorio;
  document.body.appendChild(subtituloElement);
}

// Função 3: Gerar texto
function gerarTexto() {
  const textos = [
    "Buracos negros um dos maiores mistérios do espaço gigantes massivos onde nem a própria luz escapa",
    "Meteoros gigantes e pequenos causam grande destruição porem a maioria dos que podem nos causar danos estão mapeados",
    "A seita celestial do norte a seita que lutou até o fim contra a noite aqueles que eram as grandes barreiras da humanidade teve seu fim por traidores ",
    "Eu vim parar dentro da novel que eu escrevi porem não esta tudo indo de acordo possui um co-autor reescrevendo e alterando algumas coisas",
    "Manhaw são obras coreanas que diferente dos mangas são coloridos e possuem um certo padrão",
  ];
  const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
  const textoElement = document.createElement("p");
  textoElement.textContent = textoAleatorio;
  document.body.appendChild(textoElement);
}

// Função 4: Gerar foto
function gerarFoto() {
  const fotos = [
    "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/uma-das-concepcoes-artisticas-possivelmente-mais-proximas-um-buraco-negro-real-foi-apresentada-no-filme-interestelar-christopher-nolan-5acb7817aa3e5.jpg",
    "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/01/meteoros-na-atmosfera.jpg",
    "https://i.pinimg.com/564x/41/ca/de/41cade47809584e3cd87a1612d3275fb.jpg",
    "https://i.pinimg.com/564x/70/51/eb/7051eb02f82d7ce2af7c6c2df1ae5d69.jpg",
    "https://i.pinimg.com/736x/c4/b3/6b/c4b36b560412545e6a71927ff3c46aeb.jpg",
  ];
  const fotoAleatoria = fotos[Math.floor(Math.random() * fotos.length)];
  const fotoElement = document.createElement("img");
  fotoElement.src = fotoAleatoria;
  fotoElement.alt = "Imagem ilustrativa";
  document.body.appendChild(fotoElement);
}

function gerarLegenda() {
  const legendas = [
    "Um fenomeno extremamente legal e curioso",
    "Aqueles que nos trazem informações de outro lugares",
    "o novo lider da seita celestial do norte",
    "Tenho que sobreviver e voltar ao meu mundo",
    "Deem uma chance vale a pena",
  ];
  const legendaAleatoria =
    legendas[Math.floor(Math.random() * legendas.length)];
  const legendaElement = document.createElement("figcaption");
  legendaElement.textContent = legendaAleatoria;
  document.body.appendChild(legendaElement);
}

// Executando as funções para gerar os 5 parágrafos
for (let i = 0; i < 5; i++) {
  gerarTitulo();
  gerarSubtitulo();
  gerarTexto();
  gerarFoto();
  gerarLegenda();
}
