//classes
class conta{
    constructor(numero,cpf,saldo,ativo){
this.numero=numero;
this.cpf=cpf;
this.saldo=saldo;
this.ativo=ativo
    }
    ativar(){
        this.ativo=true;
    }

    credito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("impossivel realizar, valor negativo")
            }
            else if(valor==0){
                console.log("impossivel realizar, valor zerado")
            }
            else{
            this.saldo=this.saldo + valor
            }
        }
        else{
            console.log("conta inativa...")
        }
        
    }

    debito(valor){
        if(this.ativo){
           if(valor<0){
                console.log("impossivel realizar, valor negativo")
            }
            
            else if (valor == 0){
                console.log("impossivel realizar, valor zerado")
            }
    
            else if(this.saldo < valor){
                console.log("impossivel realizar, saldo indisponivel")
            }
            else{
            this.saldo -= valor
            }
           
        }
            else{
            consolole.log("conta inativa...")
        }
    }
}



//programa principal
const leia = require("prompt-sync")()
let numero = parseInt(leia("digite o numero da conta :"))
let cpf = leia("digite o cpf da conta:")
let c1= new conta(numero,cpf,0,false)
let op=""
let valor=0
c1.ativar()
for (let x=1; x<=10; x++){
    console.log("movimento:"+x)
    op = leia("digite D - debito ou C para credito:")
    if(op=="D"){
        valor = parseInt(leia ("digite o valor para debito :"))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = parseInt(leia ("digite o valor para credito :"))
        c1.credito(valor)
    }
    console.log("saldo atual da conta:"+c1.saldo)
}
console.log("saldo final da conta:"+c1.saldo)