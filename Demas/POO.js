// // Programación orientada a objetos
// class = fabrica de objetos 
// objetos son los resultados de las calses
// atributos son las CharacterData
// metodo es lo que puede hacer nuestro objetco
// constructor es lo que construye las propiedades del objeto

class animal {
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad}, y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
    ladrar(){
       if (this.especie == "Perro"){
        document.write("Waw");
       }
       else {
        document.write("No puede ladrar ya que es un" + this.especie)
       }
    }
}

let perro = new animal("Perro","5","Rojo");
//console.log(perro);
//document.write(perro.color)
// document.write(perro.info)
// el this, se refiere al animal, el this.especie no tiene nada que ver con lo demas, se puede poner de otra forma
let gato = new animal("Gato","2","Negro");
let pajaro = new animal("Pájaro","1","Verde");

// document.write(`${perro.info} <br> ${gato.info} <br> ${pajaro.info}`) PARA AHORRARME ESTO, PUEDO CREAR UNA FUNCION QUE SEA VERINFO

perro.ladrar()
gato.ladrar()
pajaro.ladrar()

