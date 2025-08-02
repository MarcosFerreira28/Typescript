"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function retornarElemento(array, index) {
    if (index < 0 || index >= array.length) {
        return `O index ${index} é inválido!`;
    }
    else if (array[index] === undefined) {
        return "Não há nenhum elemento na lista nessa posição!";
    }
    return array[index];
}
console.log(retornarElemento([10, 20, 30], 1));
console.log(retornarElemento(["a", "b", "c"], 0));
console.log(retornarElemento(["a", "b", "c"], 6));
console.log(retornarElemento(["a", , "c"], 1));
//# sourceMappingURL=questao6.js.map