function carregar()
{
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12)
    {
        //Bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(231, 212, 106)'
    }
    else if (hora >= 12 && hora < 18)
    {
        //Boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(231, 162, 106)'
    }
    else
    {
        //Boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(58, 40, 163)'
    }
}
