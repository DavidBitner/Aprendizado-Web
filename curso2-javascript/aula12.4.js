var agora = new Date()
var horas_agora = agora.getHours()
var horario_documento = document.querySelector('span#agora')
var imagem = document.querySelector('div#imgs')
horario_documento.innerHTML = `${horas_agora}`
if (horas_agora >= 1 && horas_agora <= 12) {
    imagem.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/bomdia.webp')"
    document.body.style.backgroundColor = '#dedd8a'
} else if (horas_agora >= 13 && horas_agora <= 18) {
    imagem.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/boatarde.webp')"
    document.body.style.backgroundColor = '#805f32'
} else {
    imagem.style.backgroundImage = "url('/Aprendizado-Web/curso2-javascript/imgs/aula13/boanoite.jpg')"
    document.body.style.backgroundColor = '#0e182e'
}