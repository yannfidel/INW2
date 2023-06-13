const leia = require("prompt-sync")()


let num = 0
let QuantiNum = -1
let total = 0
let maior = 0

do{
    total = total + num
    if(num>maior){
        maior = num
    }
    QuantiNum++
    num = parseInt(leia("digite um numero:"))
    
}while(num>0)
console.log("total:"+total)
console.log("maior numero :"+maior)
console.log("quantidade de numeros :"+QuantiNum)