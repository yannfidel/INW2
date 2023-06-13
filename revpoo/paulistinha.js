//arays ou vetores
let equipes = ['SFC','SPFC','SCCP','SEP']
let pontos = [0,0,0,0]
const leia = require("prompt-sync")()

for(let x=0; x<equipes.length; x++){
    console.log(equipes[x])
    pontos[x] = leia("digite quantos pontos :")

}

console.log("tabela")
console.log("time\tpontos")
for (let x=0; x<equipes.length; x++){
    console.log(equipes[x]+'\t'+pontos[x])
}




