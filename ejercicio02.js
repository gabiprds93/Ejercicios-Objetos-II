function ejercicio2(nombre, edad, ocupacion, genero)
{
    function SuperCoder(nombre, edad, ocupacion, genero)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
        this.genero = genero;
        this.mensaje = function(){
            if(this.edad > 17 && (this.ocupacion == "Web Developer" || this.ocupacion == "Estudiante Laboratoria"))
            {
                return "You're awesome"
            }
            else
                return "Upsi"
        }
    }

    var superCoder = new SuperCoder(nombre, edad, ocupacion, genero);
    return superCoder.mensaje();
}

var assert = require("assert");
describe("Prueba ejercicio 2", function(){
    it("Pruebas con Tamara, 22, Estudiante Laboratoria, Femenino, debe salir You're awesome", function(){
        assert.equal("You're awesome", ejercicio2("Tamara", "22", "Estudiante Laboratoria", "Femenino"));
    });
    it("Pruebas con Gaby, 17, Estudiante Laboratoria, Femenino debe salir Upsi", function(){
        assert.equal("Upsi", ejercicio2("Gaby", 17, "Estudiante Laboratoria", "Femenino"));
    });
});