const div_colorida = document.getElementById('colorida');
const input_cor = document.getElementById('input_cor');
const div_imagens = document.getElementById('imagens');
const meu_primeiro_array = [1, 2, 3, 4, 'casa'];
const minhas_imagens = [
  {
    nome: 'Número 1',
    valor: 1,
    descricao: 'Número 1 com fundo amarelo'
  },
  {
    nome: 'Número 2',
    valor: 2,
    descricao: 'Número 2 com fundo vermelho'
  },
  {
    nome: 'Número 3',
    valor: 3,
    descricao: 'Número 3 com fundo vermelho em 3D'
  }
];

div_colorida.style.height = '1em';
div_colorida.style.background = 'black';

function muda_cor() {
  console.log(input_cor.value);
}

input_cor.onchange = muda_cor;

/* imprimir array */
let contador = 0;
while (contador < meu_primeiro_array.length) {
  console.log(meu_primeiro_array[contador]);
  contador++;
}

for (let i = 0; i < meu_primeiro_array.length; i++) {
  console.log('com for', meu_primeiro_array[i]);
}

meu_primeiro_array.forEach((ele, indice) => {
  console.log(ele, indice);
});

for (const ele of meu_primeiro_array) {
  console.log('for of', ele);
}

console.log('map', meu_primeiro_array.map((e) => e + 1));

// alterando array

minhas_imagens = minhas_imagens.forEach(
    (ele) => {
        div_imagens.innerHTML += '<img width=100'
        alt=${""ele.descricao"} src=${"ele.caminho"}
    }
)

// manipulando o DOM
minhas_imagens.forEach (
    (ele) => {
        const imagem = document.createElement('img');
        imagem.src = ele.caminho;
        imagem.width = 200;
        div_imagens.appendChild(imagem);

    }
)


