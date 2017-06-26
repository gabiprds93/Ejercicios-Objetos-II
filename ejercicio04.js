function ejercicio4(nombre, apellido, edad, genero, ciudad, pais)
{
    function Paciente(nombre, apellido, edad, genero, ciudad, pais)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.ciudad = ciudad;
        this.pais = pais;
        this.ficha = function(){
            return "Nombre: " + this.nombre + " " + this.apellido + "\nEdad: " + this.edad + "\nPais: " + this.pais;
        }
    }

    var paciente1 = new Paciente(nombre, apellido, edad, genero, ciudad, pais);
    return paciente1.ficha();
}

var assert = require("assert");
describe("Prueba ejercicio 4", function(){
    it("Pruebas con Blanca, Perez, 19, Femenino, Santiago, Chile", function(){
        assert.equal("Nombre: Blanca Perez\nEdad: 19\nPais: Chile", ejercicio4("Blanca", "Perez", 19, "Femenino", "Santiago", "Chile"));
    });
});