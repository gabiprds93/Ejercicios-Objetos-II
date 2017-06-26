function ejercicio1(numInicial, numFinal)
{
    var objeto = {
        inicio: numInicial,
        fin: numFinal,
        sumar: function(){
            var suma = 0;
            if(isNaN(this.inicio) || isNaN(this.fin))
            {
                return "Alguno de los dos valores no es un numero";        
            }
            for(var i = this.inicio; i <= this.fin; i++)
            {
                suma += i;
            }
            return suma;
        }
    };
    return objeto.sumar();
}
var assert = require("assert");
describe("Prueba ejercicio 1", function(){
    it("Pruebas con 1 y 10, debe salir 55", function(){
        assert.equal(55, ejercicio1(1, 10));
    });
    it("Pruebas con 1 y hola, debe salir Alguno de los dos valores no es un numero", function(){
        assert.equal("Alguno de los dos valores no es un numero", ejercicio1(1, "hola"));
    });
});