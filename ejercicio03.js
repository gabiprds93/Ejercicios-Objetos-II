function ejercicio3(arreglo)
{
    var texto = {
        propiedad1: arreglo[0],
        propiedad2: arreglo[1],
        propiedad3: arreglo[2],
        propiedad4: arreglo[3],
        propiedad5: arreglo[4],
        propiedad6: arreglo[5],
    }
    
    function cadena()
    {
        var propiedades = Object.keys(texto);
        var resultado = "";
        for(var i = 0; i < arreglo.length; i++)
        {
            resultado += propiedades[i] + "-->" + arreglo[i] + ";";
        }
        resultado = resultado.slice(0, -1);
        return resultado;
    }
    return cadena();
}
var assert = require("assert");
describe("Prueba ejercicio 3", function(){
    it("Pruebas con arreglo[6, 5, 4, 3, 2, 1]", function(){
        assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1", ejercicio3([6, 5, 4, 3, 2, 1]));
    });
});