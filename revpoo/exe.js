const leia = require("prompt-sync")()
let alunos = ['filipa','arthur','chloe','yann']
let notas = [0,0,0,0]
let status = ""



for(let x=0; x<alunos.length; x++){
    console.log(alunos[x])
    notas[x] = leia("digite a nota :")

}

console.log("boletim")
console.log("aluno\tnota\tstatus")
for (let x=0; x<alunos.length; x++){
    if(notas[x]>5){
        status="aprovado"
    }
    else if(notas[x]<5){
        status= "reprovado"
    }
    console.log(alunos[x]+'\t'+notas[x]+'\t'+status)
    
}