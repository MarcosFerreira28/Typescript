
//tipagem explícita "any" inserida pois se não for colocado dessa forma o TypeScript sempre dá erro. Colocado any pois na questão pede para não explicitar o tipo.
function adicionar(a : any, b: any){ 
    return a + b;
}

let total = 100;

// const adicionar = (a : any, b : any) => a + b;

const resultado = adicionar(20, 40);    
console.log(resultado);