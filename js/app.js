let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let amigosIncluidos = document.getElementById('lista-amigos').textContent;
    
    if(nome == ''){
        alert('Digite um nome.');
        return;
    }
    
    if(amigos.includes(nome.toUpperCase())){
        alert('Nome digitado já existe. Altere o nome e prossiga.');
        document.getElementById('nome-amigo').value = '';
        return;
    }else{
        amigos.push(nome.toUpperCase());
    }

    if(amigosIncluidos == ''){
        amigosIncluidos = nome;
        document.getElementById('lista-amigos').textContent = amigosIncluidos;
    }else{
        amigosIncluidos =  amigosIncluidos + ', ' + nome;
        document.getElementById('lista-amigos').textContent = amigosIncluidos;
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if(amigos.length < 3){
        alert('É necessário pelo menos 3 nomes para realizar o sorteio.');
        return;
    }
    embaralha(amigos);
    
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}
    