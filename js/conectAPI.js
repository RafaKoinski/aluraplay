async function listaVideos() {
    const result = await fetch("http://localhost:3000/videos")
    const conexao = await result.json();
    return conexao;
}

async function adcVideo(titulo, descricao, url, imagem) {
    const resultado = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    const conexao = await resultado.json();
    return conexao;
}

async function buscaVideos(filtro) {
    const resultado = await fetch(`http://localhost:3000/videos?q=${filtro}`);
    const conexao = await resultado.json();
    return conexao;
}

export const conectaAPI = {
    listaVideos,
    adcVideo,
    buscaVideos
}