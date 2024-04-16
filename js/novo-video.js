import { conectaAPI } from "./conectAPI.js";

const form = document.querySelector("[data-formulario]")

form.addEventListener('submit', evento => novoVideo(evento)); 

async function novoVideo(evento) {
    evento.preventDefault();

    const url = document.getElementById('url').value;
    const titulo = document.getElementById('titulo').value;
    const imagem = document.getElementById('imagem').value;
    const descricao = Math.floor(Math.random() * 100).toString();

    await conectaAPI.adcVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
}
