var content = [
    {
        title: 'Parte 1',
        subtitle: 'Clique para ver mais',
        nome: 'Parte 1',
        texto: 'Texto referente a parte 1.'
    },
    {
        title: 'Parte 2',
        subtitle: 'Clique para ver mais',
        nome: 'Parte 2',
        texto: "Texto referente a parte 2."
    },
    {
        title: 'Parte 3',
        subtitle: 'Clique para ver mais',
        nome: 'Parte 3',
        texto: "Texto referente a parte 3."
    },
    {
        title: 'Parte 4',
        subtitle: 'Clique para ver mais',
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
    const part = document.querySelector('.part');
    
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
        const part = document.querySelector('.part');
        const closeContent = document.querySelector('.closeContent');
        const contentContainer = document.querySelector('.contentContainer');
        
        if(contentContainer.innerHTML != '' && part.innerHTML == '' && closeContent.innerHTML != '') {
            contentContainer.innerHTML = '';
            closeContent.innerHTML = '';
            paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
            part.innerHTML += 
            `<h2><strong><i class="bi bi-easel2-fill"></i>${content[imagemAtual].title}</strong></h2>
            <p><i>${content[imagemAtual].subtitle}</i></p>`;
            return contentContainer, part, closeContent;
        }

        let partHTML = '';
        part.innerHTML = '';

        paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
        partHTML = `
            <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
            <p><i>Clique para ver mais</i></p>
        `;
        part.innerHTML += partHTML;
        partHTML = '';
    }
};

function imagemAnterior() {
    if(imagemAtual > 0) {
        imagemAtual--;
        atualizarBolinhas();
        const paints = document.getElementById('paints');
        const part = document.querySelector('.part');
        const closeContent = document.querySelector('.closeContent');
        const contentContainer = document.querySelector('.contentContainer');

        if(contentContainer.innerHTML != '' && part.innerHTML == '' && closeContent.innerHTML != '') {
            contentContainer.innerHTML = '';
            closeContent.innerHTML = '';
            paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
            part.innerHTML += 
            `<h2><strong><i class="bi bi-easel2-fill"></i>${content[imagemAtual].title}</strong></h2>
            <p><i>${content[imagemAtual].subtitle}</i></p>`;
            return contentContainer, part, closeContent;
        }

        part.innerHTML = '';
        let partHTML = '';

        paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
        partHTML = `
            <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
            <p><i>Clique para ver mais</i></p>
        `;
        part.innerHTML += partHTML;
        partHTML = '';
    }
};

function irParaImagem(indice) {
    imagemAtual = indice;
    atualizarBolinhas();
    const paints = document.getElementById('paints');
    const part = document.querySelector('.part');
    const closeContent = document.querySelector('.closeContent');
    const contentContainer = document.querySelector('.contentContainer');
    
    if(contentContainer.innerHTML != '' && part.innerHTML == '' && closeContent.innerHTML != '') {
        contentContainer.innerHTML = '';
        closeContent.innerHTML = '';
        part.innerHTML += 
        `<h2><strong><i class="bi bi-easel2-fill"></i>${content[imagemAtual].title}</strong></h2>
        <p><i>${content[imagemAtual].subtitle}</i></p>`;
        paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
        return contentContainer, part, closeContent, paints;
    }

    let partHTML = '';

    partHTML = `
        <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
        <p><i>Clique para ver mais</i></p>
    `;
    paints.style.backgroundImage = `url(assets/img/imagem${imagemAtual+1}.jpeg)`;
    part.innerHTML += partHTML;
    partHTML = '';
};

document.addEventListener('DOMContentLoaded', function() {
    atualizarBolinhas();
    const paints = document.getElementById('paints');

    if(paints == null) {
        return;
    }else {
        paints.style.backgroundImage = 'url(assets/img/imagem1.jpeg)';
        const part = document.querySelector('.part');
        partHTML = `
            <h2><strong><i class="bi bi-easel2-fill"></i> Parte ${imagemAtual+1} </strong></h2>
            <p><i>Clique para ver mais</i></p>
        `;
        part.innerHTML += partHTML;
    }
});


function loadContent() {
    const contentContainer = document.querySelector('.contentContainer');
    const part = document.querySelector('.part');
    const closeContent = document.querySelector('.closeContent');

    if(contentContainer == null || part == null || closeContent == null) {
        Swal.fire ({
            title: 'Oops...',
            text: 'Ocorreu algo de errado.',
            icon: 'error',
            timer: 2500,
            showConfirmButton: false
        });
        return;
    }

    if(contentContainer.innerHTML != '' && part.innerHTML == '' && closeContent.innerHTML != '') {
        contentContainer.innerHTML = '';
        closeContent.innerHTML = '';
        part.innerHTML += 
        `<h2><strong><i class="bi bi-easel2-fill"></i>${content[imagemAtual].title}</strong></h2>
        <p><i>${content[imagemAtual].subtitle}</i></p>`;
        return contentContainer, part, closeContent;
    }

    part.innerHTML = '';
    let containerHTML = '';
    
    containerHTML = `
        <div class="content"> 
            <h2><strong>${content[imagemAtual].nome}</strong></h2>
        <p>${content[imagemAtual].texto}</p>
        </div>
    `;

    return contentContainer.innerHTML += containerHTML, closeContent.innerHTML += `<p><span>Clique novamente na imagem para fechar.</span></p>`;
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
