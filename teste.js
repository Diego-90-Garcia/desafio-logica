let heroi = ("diego");
let exp = ("9000");

exp = parseInt(exp);
let nivel = "";
const extra = ("É de mais de 8 MIL!!!!");

if (exp <= 1000) {
    nivel = "Ferro";
} else if (exp <= 2000) {
    nivel = "Bronze";
} else if (exp <= 5000) {
    nivel = "Prata";
} else if (exp <= 7000) {
    nivel = "Ouro";
} else if (exp <= 8000) {
    nivel = "Platina";
} else if (exp <= 9000) {
    nivel = "Ascendente";
} else if (exp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome **" + heroi +"** está no nível de **" + nivel + "**.");
if (exp > 8000) {
    console.log(extra);
}
