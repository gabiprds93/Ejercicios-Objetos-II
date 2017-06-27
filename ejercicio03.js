function ejercicio3(arreglo)
{
    var texto = {};
    for(var i = 1; i <= arreglo.length; i++)
    {
        texto["propiedad" + i] = arreglo[i-1];
    }
    var propiedades = Object.keys(texto);
    var resultado = "";
    for(var i = 0; i < arreglo.length; i++)
    {
        resultado += propiedades[i] + "-->" + arreglo[i] + ";";
    }
    resultado = resultado.slice(0, -1);
    return resultado;
}
var assert = require("assert");
describe("Prueba ejercicio 3", function(){
    it("Pruebas con arreglo[6, 5, 4, 3, 2, 1]", function(){
        assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", ejercicio3([6, 5, 4, 3, 2, 1]));
    });
    it("Pruebas con arreglo[6, 5, 4, 3, 2, 1]", function(){
        assert.equal("propiedad1-->7;propiedad2-->6;propiedad3-->5;propiedad4-->4;propiedad5-->3;propiedad6-->2;propiedad7-->1", ejercicio3([7, 6, 5, 4, 3, 2, 1]));
    });
});