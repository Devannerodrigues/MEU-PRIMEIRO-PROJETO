const produtos = [];

function calcularAdicional(valorTotal) {

    if (valorTotal <= 3000) {
        return "Isento";
    }
    else if (valorTotal <= 8000) {
        return valorTotal * 0.05;
    }
    else if (valorTotal <= 12000) {
        return valorTotal * 0.10;
    }
    else if (valorTotal <= 20000) {
        return valorTotal * 0.15;
    }
    else {
        return valorTotal * 0.20;
    }

}

function exibirProdutos() {

    const tabela = document.getElementById("listaProdutos");

    tabela.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i];

        let linha = `
            <tr>
                <td>${produto.descricao}</td>
                <td>R$ ${produto.valor.toFixed(2)}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${produto.total.toFixed(2)}</td>
                <td>
                    ${
                        produto.adicional === "Isento"
                        ? "Isento"
                        : "R$ " + produto.adicional.toFixed(2)
                    }
                </td>
            </tr>
        `;

        tabela.innerHTML += linha;
    }

}

document.getElementById("formProduto")
.addEventListener("submit", function(event){

    event.preventDefault();

    let descricao = document.getElementById("descricao").value;

    let valor = Number(
        document.getElementById("valor").value
    );

    let quantidade = Number(
        document.getElementById("quantidade").value
    );

    let total = valor * quantidade;

    let adicional = calcularAdicional(total);

    let produto = {
        descricao,
        valor,
        quantidade,
        total,
        adicional
    };

    produtos.push(produto);

    exibirProdutos();

    document.getElementById("formProduto").reset();

});
