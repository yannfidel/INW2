const leia = require("prompt-sync")()

let codigo = ["GRP0X-01","GRP0X-02","GRP0X-03","GRP0X-04","GRP0X-05","GRP0X-06","GRP0X-07","GRP0X-08","GRP0X-09","GRP0X-10"]
let produto = ["BONÉ","CALÇA","BERMUDA AFRO","BATA","CAMISA AFRO","SAIA RODADA","SAIA STYLE","MACACÃO","CAMISETA TEMATICA","CALÇA SOCIAL AFRO"]
let valor = [100.00,150.00,90.00,140.00,150.00,90.00,90.00,150.00,100.00,95.50]
let estoque = [10,10,10,10,10,10,10,10,10,10]
let carrinho = [0,0,0,0,0,0,0,0,0,0]

console.log("LOJA FIDINAS \niambussin")
console.log("---------------------------------------------")
let resposta = leia("DESEJA FAZER COMPRA? S/N  :")
if (resposta="S"){
}
else if(resposta = "N"){
    console.log("ATÉ BREVE!")
}

else{console.log("resposta invalida")}

console.log("---------------------------------------------")

console.log("LOJA FIDINAS \niambussin \n\n")
console.log("RELAÇÃO DOS PRODUTOS")
console.log("COD\t\t\tPRODUTO\t\t\tVALOR R$\t\tESTOQUE")
console.log(codigo[0]+"\t\t"+produto[0]+"\t\t\t"+valor[0]+"\t\t\t"+estoque[0])
console.log(codigo[1]+"\t\t"+produto[1]+"\t\t\t"+valor[1]+"\t\t\t"+estoque[1])
console.log(codigo[2]+"\t\t"+produto[2]+"\t\t"+valor[2]+"\t\t\t"+estoque[2])
console.log(codigo[3]+"\t\t"+produto[3]+"\t\t\t"+valor[3]+"\t\t\t"+estoque[3])
console.log(codigo[4]+"\t\t"+produto[4]+"\t\t"+valor[4]+"\t\t\t"+estoque[4])
console.log(codigo[5]+"\t\t"+produto[5]+"\t\t"+valor[5]+"\t\t\t"+estoque[5])
console.log(codigo[6]+"\t\t"+produto[6]+"\t\t"+valor[6]+"\t\t\t"+estoque[6])
console.log(codigo[7]+"\t\t"+produto[7]+"\t\t\t"+valor[7]+"\t\t\t"+estoque[7])
console.log(codigo[8]+"\t\t"+produto[8]+"\t"+valor[8]+"\t\t\t"+estoque[8])
console.log(codigo[9]+"\t\t"+produto[9]+"\t"+valor[9]+"\t\t\t"+estoque[9])



let adicionar = leia("DESEJA ADICIONAR ALGO AO CARRINHO? S/N :")
if(resposta="S"){
    console.log("ADICIONANDO...")
let cod = leia("Digite o codigo do produto que deseja adicionar : ")
for(let x=0; x<produto.length; x++){
    if(cod==cod[x]){
        console.log("PRODUTO SELECIONADO :")
        console.log(codigo[0]+"\t\t"+produto[0]+"\t\t\t"+valor[0]+"\t\t\t"+estoque[0])
    }
}

let continua = leia("CONTINUAR COMPRA? S/N").toUpperCase()
while(continua !="N" ){
    console.log("ATÉ BREVE")
}

console.log("CARRINHO DE COMPRAS")
console.log("cod\t\tdescrição\t\tvalor\tQTDE COMPRADA")
let subtotal = 0
for(let x=0;x<produto.length; x++){
    if(carrinho[x]>0){
        console.log(codigo[x]+"\t"+produto[x]+"\t"+valor[x]+"\t"+estoque[x]+"\t"+carrinho[x])
    }
}
}



console.log("---------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = 'APROVADO'
    }
    else {
        situacao = 'REC'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}
console.log("---------------------------------------------")
console.log("ALTERAÇÃO DE DADOS")
let matricula = leia("Digite a matricula do  aluno deseja troca a nota : ")
for(let i=0; i<matriculas.length; i++){
    if(matricula == matriculas[i]){
        console.log(alunos[i]+" nota atual: "+notas[i])
        notas[i] = leia("Digite a nova nota do aluno : ")
    }
}
console.log("---------------------------------------------")
for(let i=0; i<matriculas.length; i++){
    if(notas[i]>5){
        situacao = 'APROVADO'
    }
    else {
        situacao = 'REC'
    }
    console.log(matriculas[i]+'\t'+alunos[i]+'\t'+notas[i]+'\t'+situacao)
}
console.log("---------------------------------------------")

