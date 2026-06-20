var content = [];

let imagemAtual = 0;
const totalImagens = 4;

function atualizarBolinhas() {
    const bolinhas = document.querySelectorAll('.carousel .containerCarousel .bolinha');
    
    if(bolinhas.length == 0) {
        return;
    }

    bolinhas.forEach((bolinha, indice) => {
        if(imagemAtual == indice) {
            bolinha.classList.add('ativa');
        }else {
            bolinha.classList.remove('ativa');
        }
    });
    part.innerHTML = '';
}

function proximaImagem() {
    if(imagemAtual < totalImagens-1) {
        imagemAtual++;
        atualizarBolinhas();
        const paints = document.getElementById('paints');
        const part = document.getElementById('part');
        var partHTML = '';

        paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
        partHTML = `
            <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
            <p><i>Clique para ver mais</i></p>
        `;
        part.innerHTML += partHTML;
        partHTML = '';
        const contentContainer = document.querySelector('.loadedContent');
        contentContainer.innerHTML = '';
    }
}

function imagemAnterior() {
    if(imagemAtual > 0) {
        imagemAtual--;
        atualizarBolinhas();
        const paints = document.getElementById('paints');
        const part = document.getElementById('part');
        var partHTML = '';

        paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
        partHTML = `
            <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
            <p><i>Clique para ver mais</i></p>
        `;
        part.innerHTML += partHTML;
        partHTML = '';
        const contentContainer = document.querySelector('.loadedContent');
        contentContainer.innerHTML = '';
    }
}

function irParaImagem(indice) {
    imagemAtual = indice;
    atualizarBolinhas();
    const paints = document.getElementById('paints');
    const part = document.getElementById('part');
    var partHTML = '';

    paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
    partHTML = `
        <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
        <p><i>Clique para ver mais</i></p>
    `;
    part.innerHTML += partHTML;
    partHTML = '';
    const contentContainer = document.querySelector('.loadedContent');
    contentContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    atualizarBolinhas();
    const paints = document.getElementById('paints');

    if(paints == null) {
        return;
    }else {
        paints.style.backgroundImage = 'url(assets/img/imagem1.jpeg)';
        const part = document.getElementById('part');
        partHTML = `
            <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
            <p><i>Clique para ver mais</i></p>
        `;
        part.innerHTML += partHTML;
    }
})


function loadContent() {
    const contentContainer = document.querySelector('.loadedContent');
    contentContainer.innerHTML = '';
    const part = document.getElementById('part');
    part.innerHTML = '';

    if(contentContainer.innerHTML != '') {
        return;
    }

    
    let containerHTML = '';
    
    containerHTML = `
    <div class="content"> 
    <h2><strong>Parte ${imagemAtual+1} </strong></h2>
    <p>Texto refente a parte</p>
    </div>
    `;

    contentContainer.innerHTML += containerHTML;

    return contentContainer;
}