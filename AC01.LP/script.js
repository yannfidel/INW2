class artigosEsportivos {
    construtor(id,descricao,ativo, estoque,preco,categoria,empresa){
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.estoque=estoque;
    this.preco=preco;
    this.categoria=categoria;
    this.empresa=empresa;
    }
    ativar(){
        this.ativar=true
    }
    
    AddEstoque(quantidade) {
        if (this.ativo) {
            if (quantidade < 0) {
                console.log("impossivel realizar, produto inexistente")
            }
            else if (quantidade == 0) {
                console.log("impossivel realizar, produto inexistente")
            }

            else {
                this.estoque = this.estoque + quantidade
            }

        }
        else {
            console.log("produto inativo...")
        }
    }




    RetirarEstoque(quantidade) {
        if (this.ativo) {
            if (quantidade < 0) {
                console.log("impossivel realizar, produto inexistente")
            }
            else if (quantidade == 0) {
                console.log("impossivel realizar, produto inexistente")
            }
            else if (this.estoque < quantidade) {
                console.log("impossivel realizar, produto em falta")
            }
            else {
                this.estoque -= quantidade
            }

        }
        else {
            console.log("produto inativa...")

        }

    }
}

//programa principal

let bolaBasquete = new artigosEsportivos("1","bola de basquete profissional para quadra",false,10,70.00,"basquete","nike")
bolaBasquete.ativar()

const leia = require("prompt-sync")()
let opcao = ""

do{
    console.log("CENTAURO")
    console.log("We're built diferent! \n\n\n\n\n\n\n")
    console.log("DESEJA FAZER COMPRAS S/N?")
        opcao= leia("DIGITE SUA OPÇÃO:")

    if (opcao == "S") {
        console.log("CENTAURO")
        console.log("We built diferent! \n\n\n\n\n\n\n")

        console.log("CADASTRO INICIAL DO PRODUTO  ")
        let descricao = leia("DIGITE A DESCRIÇÃO DO PRODUTO: ")
        let preco = parseint(leia("DIGITE O PRECO UNITARIO DO PRODUTO: \n\n"))
        console.log("PRODUTO CADASTRADO!!!")
        for(let x = 1; x<5;x++){
            console.log("------------------------------------------------")
            console.log("VENDA"+x)
            console.log("PRODUTO"+ bolaBasquete.id)
            console.log("DESCRIÇÃO:"+ bolaBasquete.descricao)
            console.log("ESTOQUE ATUAL:"+ bolaBasquete.estoque)
            let quantidade =parseInt(leia("QUANTIDADE DESEJADA:"))
            bolaBasquete.estoque.RetirarEstoque(quantidade)
            console.log("VALOR A PAGAR:"+( bolaBasquete.preco*quantidade))
            console.log("ESTOQUE ATUAL"+bolaBasquete.estoque)

        }
        console.log("------------------------------------------------")
        console.log("PRODUTO \n\n"+bolaBasquete.id)
        console.log("DESCRIÇÃO: \n\n"+bolaBasquete.descricao)
        console.log("ESTOQUE : \n\n"+bolaBasquete.estoque)
    
    
        let quantidade =parseInt(leia("QUANTIDADE DESEJADA PARA O ESTOQUE:"))
        this.estoque.RetirarEstoque(quantidade)


         }
     }

while(opcao !="N")
console.log("ATE A SUA PROXIMA COMPRA")