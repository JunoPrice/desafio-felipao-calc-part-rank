const entrada = require('prompt-sync')({sigint: true});
const notificacao = "Warcraft diz: ";

console.log(notificacao + "Bem vindo ao mundo de Warcraft");

    let nomeheroi = entrada(notificacao + "Heroi, qual é seu nome? ");
    let xpheroi= entrada(notificacao + "Digite seu nível de experiência como heroi: ");
    let nivelheroi = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante"];
    
console.log(notificacao + "Bem vindo(a): " + nomeheroi);
console.log(notificacao + nomeheroi + " entrou no mundo de Warcraft");
if(xpheroi <= 1000 ){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[0])
}else if(xpheroi <= 2000){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[1])
}else if(xpheroi <= 6000){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[2])
}else if(xpheroi <= 7000){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[3])
}else if(xpheroi <= 8000){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[4])
}else if(xpheroi <= 9000){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[5])
}else if(xpheroi <= 10000){
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[6])
}else{
        console.log(notificacao + nomeheroi + ", seu Nível de heroi é: " + nivelheroi[7])
};
console.log(notificacao + "O mapa será atribuido de acordo com seu nível, contactando servidores, aguarde...");