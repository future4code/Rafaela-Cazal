
class Despesas {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

function cadastrarDespesa() {
    
    valor = document.getElementById("valor-despesa").value
    tipo = document.getElementById("seleciona-despesa").value
    descricao = document.getElementById("descricao-despesa").value

    const novaDespesa = new Despesas(valor, tipo, descricao);

    let guardaDespesa = []
    guardaDespesa.push(novaDespesa)

}

cadastrarDespesa()
