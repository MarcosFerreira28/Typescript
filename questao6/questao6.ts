function retornarElemento<T>(array: Array<T>, index: number){
    if (index < 0 || index > array.length){
        // console.log("Esse index é inválido")
        return `O index ${index} é inválido!`;
    }
    return array[index];
}

console.log(retornarElemento([10,20,30], 1))
console.log(retornarElemento(["a", "b", "c"], 0))
console.log(retornarElemento(["a", "b", "c"], 6))
