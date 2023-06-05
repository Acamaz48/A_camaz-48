const body = document.getElementsByTagName('body')[0];

const div = document.createElement('div');
const imagem = document.createElement('img');
const legenda = document.createElement('h5');

imagem.src = localStorage.getItem('caminho');
imagem.width = '100';
legenda.innerHTML = localStorage.getItem('descricao');

div.appendChild(imagem);
div.appendChild(legenda);
body.appendChild(div);

