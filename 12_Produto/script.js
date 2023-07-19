class Produto{

    constructor(){
        this.id=1;
        this.arrayProduto = [];
    }
    Adicionar(){
      let produto = this.lerDados()
      if(this.validarDados(produto) == true){
        this.Salvar(produto)
      }
      this.Listar()
      this.Cancelar()

    }

    lerDados(){
        let produto={}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoProduto = document.getElementById('pdpreco').value

        return produto
    }

    validarDados(produto){
        let msg = '';
        
        if (produto.nomeProduto === ''){
            msg += 'Por favor, insira corretamente o campo do nome do produto'
        }
        if(produto.precoProduto === ''){
            msg += 'Por favor, insira corretamente o campo do preço do produto'
        }
        if (msg != ''){
            alert(msg)
            return false
        }

        return true
    }

    Salvar(produto){
        this.arrayProduto.push(produto)
        this.id++
    }

    Listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for ( let i = 0; i < this.arrayProduto.length; i++){

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProduto[i].id;
            td_nome.innerText = this.arrayProduto[i].nomeProduto;
            td_preco.innerText = this.arrayProduto[i].precoProduto;
            var imagem = document.createElement ('img')
            imagem.src = 'del.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProduto[i].id+")")
            td_del.appendChild(imagem)

        }
    }   

    Cancelar() {
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }
    
    Deletar(id){
        let tbody = document.getElementById('tbody')
        for ( let i = 0; i < this.arrayProduto.length; i++){
            if(this.arrayProduto[i].id == id){
                this.arrayProduto.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert(`O Produto ${id} foi deletado`)
    }
}

var produto = new Produto();
