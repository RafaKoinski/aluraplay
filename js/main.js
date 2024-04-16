import { conectaAPI } from "./conectAPI.js";

const lista = document.querySelector("[data-lista]")
const botao = document.querySelector("[data-botaoFiltro]")
const apagar = document.querySelector("[data-botaoApagar]")

function novoCard (titulo, descricao, url, imagem){
    const video = document.createElement("li");
    video.className = "videos__item"
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `

    return video;
}

async function listaVideo() {
    const listaApi = await conectaAPI.listaVideos();
    listaApi.forEach(e => lista.appendChild(novoCard(e.titulo, e.descricao, e.url, e.imagem)));
}
listaVideo();

botao.addEventListener("click", evento => filtrarVideo(evento));
apagar.addEventListener("click", () => window.location.reload());

async function filtrarVideo(evento) {
    evento.preventDefault();
    const valor = document.getElementById("pesquisar").value;
    const busca = await conectaAPI.buscaVideos(valor);

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(e => lista.appendChild(novoCard(e.titulo, e.descricao, e.url, e.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com o termo "${valor}"</h2>`
    }
}