class animal {
    constructor(especie, peso, porte, anonascimento) {
        this.especie = especie;
        this.peso = peso;
        this.porte = porte;
        this.anonascimento = anonascimento
    }
    barulho() {
        console.log("roarrrr...")
    }

    voltaidade(anoatual) {
        return (anoatual - this.anonascimento)
    }

}

class gato extends animal {
    constructor(especie, cor, raca) {
        super(especie);
        this.cor = cor;
        this.raca = raca
    }
    miar() {
        console.log("miauuuuuu....")
    }
}

let animal1 = new animal("tigre", "200kg", "grande", 2000)
let animal2 = new animal("canguru", "100kg", "medio", 2015)
let animal3 = new gato("felino", "preto", "siames")


animal1.barulho()


animal3.miar()


let idade = animal1.voltaidade(2023)
console.log(idade)




class conta{
    constructor(numero,saldo,ativa,){
            this.numero=numero;
            this.saldo=saldo;
            this.ativa=ativa
    }
        deposito(valor){
            this.saldo=this.saldo + valor
        }
        saque(valor){
            if(valor<0){
                console.log("impossivel fazer saque, numero negativo")
            }
            else if(this.saldo<valor){
                console.log("impossivel realizar saque, saldo insuficiente")
            }
            else{
                this.saldo = this.saldo - valor
            }
          
            
        }

}


let c1= new conta(15,0,true)

c1.deposito(50)


console.log(c1.saldo)

c1.saque(40)

console.log(c1.saldo)