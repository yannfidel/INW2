const leia = require("prompt-sync")()

num = parseInt(leia("digite seu numero entre 5 e 9:"))

if(num>9){
    console.log("numero alto demais")

    
}
else if(num<5){
console.log("numero baixo demais")
}
else{
    while(num<100){
        num = num * 3
        console.log(num)
    }
}

