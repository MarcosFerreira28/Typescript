function retornarElemento<T>(array: Array<T>, index: number) : T | string{
    if (index < 0 || index >= array.length){
        return `O index ${index} é inválido!`;
    }
    else if (array[index] === undefined){
        return "Não há nenhum elemento na lista nessa posição!"
    }

    return array[index];
}

console.log(retornarElemento([10,20,30], 1))
console.log(retornarElemento(["a", "b", "c"], 0))
console.log(retornarElemento(["a", "b", "c"], 6))
console.log(retornarElemento(["a", , "c"], 1))

