class conta {
    constructor(numero, cpf, saldo, ativo) {
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo
    }

    ativar() {
        this.ativo = true;
    }




    credito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("impossivel realizar, valor negativo")
            }
            else if (valor == 0) {
                console.log("impossivel realizar, valor zerado")
            }

            else {
                this.saldo = this.saldo + valor
            }

        }
        else {
            console.log("conta inativa...")
        }
    }

    debito(valor) {
        if (this.ativo) {
            if (valor < 0) {
                console.log("impossivel realizar, valor negativo")
            }
            else if (valor == 0) {
                console.log("impossivel realizar, valor zerado")
            }
            else if (this.saldo < valor) {
                console.log("impossivel realizar, saldo indisponivel")
            }
            else {
                this.saldo -= valor
            }

        }
        else {
            console.log("conta inativa...")

        }

    }

    desativar(){
        if(this.ativa){
            this.ativa = false;
            console.log("Conta desativada!")
        } else {
            console.log("A conta já está desativa")
        }
    }

}


// DANIEL SANCHEZ

class corrente extends conta{
    constructor(numero, cpf, saldo, ativo,Cheque){
        super(numero,cpf,saldo,ativo)
        this.Cheque = Cheque
    }
    EmitirCheque(){
        if ( this.Cheque == 3 ){
            console.log("Você atingiu o limite")
        } 
        else if (this.saldo < 30){
            console.log("Saldo insuficiente")
        }
        else{
            console.log("Você comprou um talão de cheque.")
            this.saldo -= 30
        }
    }
    
}


// CHLOE SONVESSO

class Poupanca extends conta{
    constructor(numero, cpf, saldo, ativo, DiaAniversarioConta, diaHoje){
        super(numero,cpf,saldo,ativo)
        this.DiaAniversarioConta = DiaAniversarioConta;
        this.diaHoje = diaHoje;
    }
    
    verificar(){
        if(this.DiaAniversarioConta == this.diaHoje){
            this.saldo += (this.saldo * 0.05) + this.saldo
            console.log("Parabéns sua conta tem 1 ano a mais")
        }
    }
    
}




// YANN FIDELIS

class especial extends conta {
    constructor(numero, cpf, saldo, ativo, limite) {
        super(numero, cpf, saldo, ativo)
        this.limite = limite
    }
    usarLimite(valor) {
        if (valor < 0) {
            console.log("impossivel realizar valor negativo...")
        }
        else if (valor == 0) {
            console.log("impossivel realizar valor zerado...")
        }
        else if (valor > (this.saldo + this.limite)) {
            console.log("impossivel realizar sem valor no limite do saldo...")
        }
        else {
            this.limite = this.limite - valor
            credito(valor)
        }

    }

}




//programa principal

const leia = require("prompt-sync")()
let opcao = ""




//montando o menu

do {
    console.log("1-CONTA POUPANCA")
    console.log("2-CONTA CORRENTE")
    console.log("3-CONTA ESPECIAL")
    console.log("4-SAIR")
    opcao = leia("Digite o numero da sua opção :")




    if (opcao == "1") {
       let numero = leia("Digite o numero da conta:")
       let cpf = leia("Digite o cpf da conta:")
       let DiaAniversarioConta = leia("Digite o dia do aniversario da conta")
       let diaHoje = leia("Digite o dia de hoje:")
       let cp1 = new Poupanca(numero,cpf,0,false,DiaAniversarioConta)
       cp1.ativar()
        let op =""
        let valor=0
        for(let x=1;x<=10;x++){
            valor = parseFloat(leia("Digite o valor: "))
            op = leia("Digite D de debito ou C de credito:")
            if(op =="D"){
                cp1.debito(valor)
            }
            else if(op =="C"){
                cp1.credito(valor)
            }
            console.log("Saldo atual R$:" +cp1.saldo)
        }
    }

    else if (opcao == "2") {
        let numero = leia("Digite o numero da conta:")
       let cpf = leia("Digite o cpf da conta:")
       let cc1 = new corrente(numero,cpf,0,false,0)
       cc1.ativar()
        let op=""
        let valor = 0
        for( x=1;x<=10;x++){
            valor = parseFloat(leia("Digite o valor: "))
            op = leia("Digite D de debito ou C de credito:")     
            if(op =="D" ){
                cc1.debito(valor)
            }
            else if(op =="C"){
                cc1.credito(valor)
            }
            console.log("Saldo atual R$:" +cc1.saldo)
            op = leia("Gostaria de encerrar a transacao?")
            if(op == "S"){
                op = leia("Gostaria de um cheque?")
                if(op == "S"){
                    cc1.EmitirCheque();
                }
                cc1.desativar()
                break
            }

        }
    }

    else if (opcao == "3") {
        let numero = leia("Digite o numero da conta:")
       let cpf = leia("Digite o cpf da conta:")
        let cee1 = new especial(numero, cpf,0,false,1000)
        cee1.ativar()
        let op=""
        let valor = ""
        for(let x=1; x<=10; x++){
            console.log(x)
            valor = parseInt(leia("Digite o valor: "))
            op = leia("Digite D para debito ou C para credito: ")
            if(op=="D"){
                cee1.debito(valor)
            }
            else if(op=="C"){
                cee1.credito(valor)
            }
            console.log("Saldo atual R$:"+cee1.saldo)
        }
        valor = parseInt(leia("Usar limite? Valor:"))
        cee1.usarLimite(valor)
        console.log("Saldo Final: "+cee1.saldo)

        

    }

} while (opcao != "4")

console.log("bye bye")




let numero = parseInt(leia("digite o numero da conta :"))

let cpf = leia("digite o cpf da conta:")

let c1 = new conta(numero, cpf, 0, false)
let op = ""
let valor = 0
c1.ativar()
for (let x = 1; x <= 10; x++) {
    console.log("movimento:" + x)
    op = leia("digite D - debito ou C para credito:")
    if (op == "D") {
        valor = parseInt(leia("digite o valor para debito :"))
        c1.debito(valor)
    }

    else if (op == "C") {
        valor = parseInt(leia("digite o valor para credito :"))
        c1.credito(valor)
    }
    console.log("saldo atual da conta:" + c1.saldo)
}
console.log("saldo final da conta:" + c1.saldo)