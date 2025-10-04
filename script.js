let huellasEncontradas= true;
let armaEncontrada= false;
let testigoMiente= true;
let numeroSospechosos= 3; 
let temperaturaAmbiente= 25;

console.log("¿Hay suficientes pruebas? ", huellasEncontradas && armaEncontrada);
console.log("¿Puedes interrogar al testigo?", !testigoMiente);
console.log("¿La investigaciòn está cerca de resolverse? ", numeroSospechosos <=2);
console.log("¿La temperatura ambiente es Exactamente igual al número de sospechosos?", temperaturaAmbiente===numeroSospechosos);
console.log("¿Hay huellas o se encontró el arma?", huellasEncontradas || armaEncontrada);
