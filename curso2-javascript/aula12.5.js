var btn = document.querySelector('input#verificar')
btn.addEventListener('click', verificar)
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.querySelector('input#nascimento').value
    var detectou = document.querySelector('div#detectou')
    var imgs = document.querySelector('div#imgs')
    if (nascimento.length == 0 || nascimento > ano) {
        window.alert('Verifique se o ano de nascimento foi digitado corretament')
    } else {
        var fsexo = document.getElementsByName('sexo')
        var idade = ano - nascimento
        var sexo = ''
        if (fsexo[0].checked) {
            sexo = 'Homem'
            if (idade >= 0 && idade < 12) {
                imgs.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/menino.jpeg')"
            } else if (idade < 65) {
                imgs.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/homem.jpeg')"
            } else {
                imgs.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/idoso.jpeg')"
            }
        } else {
            sexo = 'Mulher'
            if (idade >= 0 && idade < 12) {
                imgs.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/menina.jpeg')"
            } else if (idade < 65) {
                imgs.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/mulher.jpeg')"
            } else {
                imgs.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/idosa.jpeg')"
            }
        }
        detectou.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    }
}