let heroi = "Star Gatuno "
let nivelHeroi = 7000
let patente = ""



if (nivelHeroi <=1000){
    patente = "Nivel Ferro"
}else if (nivelHeroi >=1001 && nivelHeroi<=2000){
    patente = "Nivel Bronze"
}else if (nivelHeroi >= 2001 && nivelHeroi<=5000){
    patente = "Nivel Prata"
}else if (nivelHeroi>=5001 && nivelHeroi<=7000){
    patente = "Nivel Ouro"
}else if(nivelHeroi >=7001 && nivelHeroi<=8000){
    patente = "Platina"
}else if (nivelHeroi>=8001 && nivelHeroi<=9000){
    patente = "Ascendente"
}else if (nivelHeroi>= 9001 && nivelHeroi<=10000){
    patente = "Imortal"
}else patente = "Radiante"

console.log("O heroi " + `${heroi}`  +  `${patente}`)

