var botao_adicionar = document.querySelector('input#adicionar')
var botao_finalizar = document.querySelector('input#finalizar')
botao_adicionar.addEventListener('click', adicionar)
botao_finalizar.addEventListener('click', finalizar)
var resposta = document.querySelector('div#resposta')
var lista = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    let num = document.querySelector('input#numero')
    let numero = Number(num.value)
    let res = document.querySelector('select#lista')
    if (numero.length == 0) {
        window.alert('Digite um numero')
    } else if (isNumero(numero) && inLista(numero, lista)) {
        lista.push(numero)
        let item = document.createElement('option')
        item.text = `Valor ${numero} adicionado`
        res.appendChild(item)
    } else {
        window.alert('Numero inválido')
    }
    num.value = ''
    num.focus()
    resposta.innerHTML = ''
}

function finalizar() {
    let menor = Infinity
    let maior = -Infinity
    let soma = 0
    let total = lista.length
    let media = 0
    for (let i in lista) {
        if (lista[i] < menor) {
            menor = lista[i]
        }
        if (lista[i] > maior) {
            maior = lista[i]
        }
        soma += lista[i]
    }
    media = soma / total
    if (lista.length == 0) {
        window.alert('Digite valores antes de finalizar')
    } else {
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados.</p><br>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p><br>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p><br>`
        resposta.innerHTML += `<p>Somando todos os valores temos ${soma}.</p><br>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}