var content = [
    {
        nome: 'Parte 1',
        texto: "Texto referente a parte 1."
    },
    {
        nome: 'Parte 2',
        texto: "Texto referente a parte 2."
    },
    {
        nome: 'Parte 3',
        texto: "Texto referente a parte 3."
    },
    {
        nome: 'Parte 4',
        texto: "Texto referente a parte 4."
    }
];

var presentation = [
    {
        id: 1,
        nome: "Guilherme Martins Glaeser",
        apresentacao: "Texto de apresentação."
    },
    {
        id: 2,
        nome: "Alan A. de Vargas",
        apresentacao: "Texto de apresentação."
    },
    {
        id: 3,
        nome: "Marcos A. R. da Silva",
        apresentacao: "Texto de apresentação."
    },
    {
        id: 4,
        nome: "Otávio B. Flores",
        apresentacao: "Texto de apresentação."
    },
    {
        id: 5,
        nome: "Sofia C. T. Cunha",
        apresentacao: "Texto de apresentação."
    },
    {
        id: 6,
        nome: "Emily S. Schons",
        apresentacao: "Texto de apresentação."
    }
];

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
};

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
};

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
};

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
};

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
});


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
            <h2><strong>${content[imagemAtual].nome}</strong></h2>
            <p>${content[imagemAtual].texto}</p>
        </div>
    `;

    contentContainer.innerHTML += containerHTML;

    return contentContainer;
};

function loadPresentation(id) {
    const personalPresentation = document.querySelectorAll('.personalPresentation');
    
    if(personalPresentation[id-1].innerHTML != '') {
        personalPresentation[id-1].innerHTML = '';
        return personalPresentation;
    }

    let presentationHTML = '';

    presentation.forEach(pessoa => {
        if(pessoa.id == id && personalPresentation[id-1].innerHTML == '') {
            presentationHTML = `
                <div class="presentationContent">
                    <p>${pessoa.apresentacao}</p>
                </div>
            `;

            //personalPresentation[id >= 2 ? id - 2 : id - 1].innerHTML = '';
            //if(personalPresentation[id > 5 ? id - 1 : id].innerHTML != '') {
            //    personalPresentation[id].innerHTML = '';
            //}

            for (let i = 0; i < personalPresentation.length; i++) {
                const container = personalPresentation[i];

                if(i == id-1) {
                    continue;
                }else if(container.innerHTML != ''){
                    container.innerHTML = '';
                }
                
            }
            personalPresentation[id-1].innerHTML += presentationHTML;
        }
    })

    return personalPresentation;

};

function clearCards() {
    const personalPresentation = document.querySelectorAll('.personalPresentation');

    for (let i = 0; i < personalPresentation.length; i++) {
        const container = personalPresentation[i];

        if(container.innerHTML != '') {
            container.innerHTML = '';
        }
    }

    return personalPresentation;
}
