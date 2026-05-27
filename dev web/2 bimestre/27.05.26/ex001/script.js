console.log('meu primeiro script');

//aqui usei a explicação do claude pois foi bem simples
let nome = 'Nathan';
console.log(nome);
let idade = '22';
console.log(idade);
let cidade = ('SSP');
console.log(cidade);
console.log(nome,idade,cidade);

// nesse usei o GPT aindo percebi que o estava errando no momento de colocar a tag p estav colocando depois do scrip gerendo assim um erro pois o valor de buscar era indefinido
let paragrafo = document.getElementById('menssagem');
paragrafo.innerText='JavaScript alterou este texto!';

// usei apenas as instruções
let tituloAlte = document.getElementById('titulo');
tituloAlte.innerText='Nathan';
tituloAlte.style.color='red';

// usei apenas as instruções
function Saudar(){console.log('Olá! O botão foi clicado')};

// usei apenas as instruções
function Saudar(){
    let resposta1 = document.getElementById('resposta')
    resposta1.innerText='Você clicou no botão!'
}

//usei apenas as intruções
function mostraNome(){
    let nome = document.getElementById('nomeUsuario').value
    document.getElementById("resultado").innerText = nome
}

//Segui as intruções
function mostraNome1(){
    let nome1 = document.getElementById('nomeUsuario1').value
    document.getElementById("resultado1").innerText = 'Ola! ' + nome1 + '!'
}

//usei apenas as intruções
function calcular(){
    let n1 = Number(document.getElementById('numero1').value)
    let n2 = Number(document.getElementById('numero2').value)
    let soma = n1 + n2 
    document.getElementById('resultadoCalculo').innerText = soma
}

//usei apenas as intruções

function Soma(){
    let num3 = Number(document.getElementById('numero3').value)
    let num4 = Number(document.getElementById('numero4').value)
    let Soma1 = num3 + num4 
    document.getElementById('resultadoCalculo1').innerText = Soma1
}

function Subtração(){
    let num3 = Number(document.getElementById('numero3').value)
    let num4 = Number(document.getElementById('numero4').value)
    let Subitração = num3 - num4 
    document.getElementById('resultadoCalculo1').innerText = Subitração
}

function Multiplicação(){
    let num3 = Number(document.getElementById('numero3').value)
    let num4 = Number(document.getElementById('numero4').value)
    let Multiplicação = num3 * num4 
    document.getElementById('resultadoCalculo1').innerText = Multiplicação
}

function Divisão(){
    let num3 = Number(document.getElementById('numero3').value)
    let num4 = Number(document.getElementById('numero4').value)
    let Divisão = num3 / num4 
    document.getElementById('resultadoCalculo1').innerText = Divisão
}