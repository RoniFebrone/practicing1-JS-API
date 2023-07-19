function presente (dinheiro, valor){
    if (dinheiro < valor){
        return 'Sem dinheiro suficiente...'
    }else{
        return 'você realmente precisa fazer essa compra? '
    }
}

let x = presente (100, 90)
console.log(x)
