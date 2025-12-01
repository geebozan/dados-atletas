//Definindo a classe
class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome,
        this.idade = idade,
        this.peso = peso,
        this.altura = altura,
        this.notas = notas
    };
    calculaCategoria(){
        if(this.idade >= 9 && this.idade <= 11) {
            return "Infantil"
        } 
        else if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil"
        } 
        else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário"
        } 
        else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        } 
        else {
            return "Sem categoria"
        }
    };
    calculaIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return imc
    };
    calculaMediaValida(){
        let notas = this.notas
        notas = notas.sort((a, b) => b-a)
        notas = notas.slice(1, 4)
        let soma = 0
        notas.forEach(function (nota){
            soma = soma + nota
        })
        return soma / notas.length
    };
    obtemNomeAtleta(){
        return "Nome: " + this.nome
    };
    obtemIdadeAtleta(){
        return "Idade: " + this.idade
    };
    obtemPesoAtleta(){
        return "Peso: " + this.peso 
    };
    obtemNotasAtleta(){
        return "Notas: " + this.notas
    };
    obtemCategoria(){
        return "Categoria: " + this.calculaCategoria()
    };
    obtemIMC(){
        return "IMC: " + this.calculaIMC()
    };
    obtemMediaValida(){
        return "Média Válida: " + this.calculaMediaValida()
    };
}

//Declara o atleta

const atleta = new Atleta("Cesar Bascal", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88])

//Saída no console

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
