class Produto {

    constructor() {
        this.id = 0;
        this.array = [];
    }

    salvar() {
        let produtoDados = this.lerDados();
        if (this.validarCampos(produtoDados)) {
            this.adicionar(produtoDados);
            this.adicionarNoHtml(produtoDados);
        }

        this.cancelar();
        console.log(produtoDados);
    }

    adicionar(produtoDados) {
        this.array.push(produtoDados);
    }

    lerDados() {
        let produto = {
            nomeProduto: document.querySelector('#produto').value,
            valor: document.querySelector('#valor').value,
            id: this.array.length + 1
        };

        return produto;
    }

    validarCampos(produtoDados) {
        if (!produtoDados.nomeProduto || !produtoDados.valor) {
            alert('Defina um nome');
            return false;
        } else {
            return true;
        }
    }

    cancelar() {
        document.querySelector('#valor').value = '';
        document.querySelector('#produto').value = '';

        document.querySelector('#salvar').textContent = "Salvar"
    }

    adicionarNoHtml(produtoDados) {
        let htmlProdutosTabela = document.querySelector('.corpo');
        let produtosTabela = document.createElement('tr');

        produtosTabela.innerHTML = `<td class='center' class="id-edit"> ${produtoDados.id} </td> <td> ${produtoDados.nomeProduto} </td> <td> ${produtoDados.valor} </td><td class='center'><img src='./scr/images/edit-solid.svg' class="edit-icon"><img src='./scr/images/trash-solid.svg' class="remove-icon"></td>`;

        htmlProdutosTabela.appendChild(produtosTabela);

        let removerProduto = () => {
            let remove = produtosTabela.querySelector('.remove-icon');
            remove.addEventListener('click', () => {
                this.removerProdutoDaArray();
                produtosTabela.remove();
            });
        };

        removerProduto();

        let editarProduto = () => {
            let edit = produtosTabela.querySelector('.edit-icon');
            edit.addEventListener('click', () => {
               
                document.querySelector('#produto').value = produtoDados.nomeProduto;
                document.querySelector('#valor').value = produtoDados.valor;
                document.querySelector('#salvar').textContent = 'Atualizar';
            });
        };

        editarProduto();
    }

    removerProdutoDaArray() {
        this.array = this.array.filter(produto => produto != "");
    }

}

let produto = new Produto();
