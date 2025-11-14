function saudacao(nome="Visitante"){
    console.log(`Olá, ${nome}!`);
}
saudacao();

function calcularMedia(a, b, c){
    return (a+b+c)/3;
}

let media = calcularMedia(5,10,2);
console.log(media);

function apresentarProduto (nomeProduto, valor){
    return `O nome do produto é ${nomeProduto}. O preço está apenas: ${valor} reais!`
}

let mercadoria = apresentarProduto("Mala","0");
console.log(mercadoria);