export default class Gorjeta {
    valorPedido;
    porcentagemGorjeta;
    qtdPessoas;
    gorjetaTotol;
    gorjetaPessoa;

    constructor(valorPedido, porcentagemGorjeta, qtdPessoas){
        this.valorPedido = valorPedido;
        this.porcentagemGorjeta = porcentagemGorjeta;
        this.qtdPessoas = qtdPessoas;
    }

    setGorjetaTotal(){
        this.gorjetaTotol = (this.valorPedido * this.porcentagemGorjeta) / 100;
        return this.gorjetaTotol
    }
    
    setgorjetaPessoa(){
        this.gorjetaPessoa = this.gorjetaTotol / this.qtdPessoas
        return this.gorjetaPessoa
    }
}
