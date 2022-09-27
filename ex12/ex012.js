var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12) {
console.log(`BOM DIA!`)}

else if(hora <=18) {
    console.log(`Boa tarde!`)
}

else{
    console.log(`Boa noite!`)
}