let celsiuistemperature=[20,34,67,89,34];
function celsiustofarenheit(celsius){
    return (celsius*9/5)+32;
}
 let farenheittemperature=celsiuistemperature.map(celsiustofarenheit)
 console.log(farenheittemperature);
 