const leia = require("prompt-sync")()

let matricula = ["mat1","mat2","mat3","mat4"]

let aluno = ["Marcos","Pedro","maria","paulo"]

let notas = [0,0,0,0]

let status



console.log("Digitação das notas")
for(let i=0; i<matricula.length; i++){
    console.log(matricula[i]+'\t'+aluno[i])
    notas[i] = leia("Digite a nota : ")
}

for(let i=0; i<matricula.length; i++){
    if(notas[1,2,3,4]>5){
        status = 'APROVADO'
    }
    else{
        status = 'REC'
    }
}



console.log("matricula\taluno\t\tnota")
console.log("--------------------------------------------")
console.log(matricula[0]+"\t\t"+aluno[0]+"\t\t"+notas[0]+"\t\t"+status)
console.log(matricula[1]+"\t\t"+aluno[1]+"\t\t"+notas[1]+"\t\t"+status)
console.log(matricula[2]+"\t\t"+aluno[2]+"\t\t"+notas[2]+"\t\t"+status)
console.log(matricula[3]+"\t\t"+aluno[3]+"\t\t"+notas[3]+"\t\t"+status)
console.log("--------------------------------------------")


let resposta = leia("DESEJA ALTERAR ALGUMA NOTA? S/N :")
if(resposta="S"){
    console.log("ALTERAÇÃO DE NOTA")
let mat = leia("Digite a matricula do aluno que deseja troca a nota : ")
for(let i=0; i<matricula.length; i++){
    if(mat == matricula[i]){
        console.log("Nota atual : "+notas[i])
        notas[i] = leia("Digite a nova nota : ")
    }
}
}








console.log("matricula\taluno\t\tnota\t\tstatus")
console.log("--------------------------------------------------------------")
console.log(matricula[0]+"\t\t"+aluno[0]+"\t\t"+notas[0]+"\t\t"+status)
console.log(matricula[1]+"\t\t"+aluno[1]+"\t\t"+notas[1]+"\t\t"+status)
console.log(matricula[2]+"\t\t"+aluno[2]+"\t\t"+notas[2]+"\t\t"+status)
console.log(matricula[3]+"\t\t"+aluno[3]+"\t\t"+notas[3]+"\t\t"+status)
console.log("--------------------------------------------------------------")