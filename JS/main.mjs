import Gorjeta from "./gorjeta.mjs";

class ViewGorjeto {

    constructor(){
        this.inputValorCompra = document.getElementById('valorCompra');
        this.inputValorPorcentagem = document.getElementById('inputValorPorcentagem');
        this.inputQtdPessoas = document.getElementById('inputQtdPessoas');
        this.ShowValorGorjeta = document.getElementById('ShowValorGorjeta');
        this.ShowValorGorjetaPessoa = document.getElementById('ShowValorGorjetaPessoa');
        this.calGorjetaBtn = document.getElementById('calGorjetaBtn');
        this.btnsCustom = document.getElementById('btnsCustom');
    }
    showGorjeta(){
        let gorjeta = new Gorjeta(viewGorjeto.inputValorCompra.value, viewGorjeto.inputValorPorcentagem.value, viewGorjeto.inputQtdPessoas.value);
        viewGorjeto.ShowValorGorjeta.textContent = gorjeta.setGorjetaTotal()
        viewGorjeto.ShowValorGorjetaPessoa.textContent = gorjeta.setgorjetaPessoa()
    }

}

const viewGorjeto = new ViewGorjeto();

viewGorjeto.calGorjetaBtn.addEventListener('click', function(e){
    e.preventDefault();
    viewGorjeto.showGorjeta()

    viewGorjeto.inputValorCompra.value = '';
    viewGorjeto.inputValorPorcentagem.value = '';
    viewGorjeto.inputQtdPessoas.value = '';
    viewGorjeto.inputValorPorcentagem.style.display = 'none';
})


viewGorjeto.btnsCustom.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.value === "custom"){
        viewGorjeto.inputValorPorcentagem.style.display = 'block';
    }else{
        viewGorjeto.inputValorPorcentagem.value = e.target.value;
    }

})

