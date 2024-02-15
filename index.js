const entrada = require('prompt-sync')({sigint: true});
const notificacao = "LoL diz: ";

console.log(notificacao + "Bem vindo a League of Legends, prepare-se para provar seu valor");

    let  summonerName= entrada(notificacao + "Insira seu nome de invocador: ");
    let nivelheroi = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Diamante" , "Lendário" , "Imortal"];
    
console.log(notificacao + "Bem vindo(a): " + summonerName);
console.log(notificacao + summonerName + " entrou em Summoner's Rift");


let summonerWin= entrada(notificacao + "Insira sua quantidade de vitórias Invocador: ");
let summonerLoss= entrada(notificacao + "Insira sua quantidade de derrotas Invocador: ");

let summonerRank = soma(parseInt(summonerWin), parseInt(summonerLoss)) /*foi necessário usar o parseInt pois a função concatenava os valores
 de vitórias e derrotas ao invés de subtrair, pois o considerava uma string*/
function soma(numA, numB){
    let somatorio = numA - numB
    return somatorio
}
console.log(notificacao + summonerName +", o Saldo de suas partidas rankeadas é: " + summonerRank)

if(summonerRank <= 10 ){
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[0])
}else if(summonerRank <= 20){
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[1])
}else if(summonerRank <= 50){
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[2])
}else if(summonerRank <= 80){
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[3])
}else if(summonerRank <= 90){
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[4])
}else if(summonerRank <= 100){
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[5])
}else{
        console.log(notificacao + summonerName + ", seu nível de partidas rankeadas é: " + nivelheroi[6])
};

console.log(notificacao + "As partidas rankeadas serão atribuidas de acordo com seu rank, contactando servidores, aguarde...");