// Funciones

// Sirve para llamar a un codigo que ya has escrito antes, y te ahorras todas las lineas de codigo


/*function saludar( ){


    respuesta = prompt("hola lucas, como fue tu dia")
    if(respuesta == "bien"){
        alert("me alegro")
    }
    
    else{
        alert("una pena")
    }

}*/

// No se ejecuta hasta que la llame abajo

//saludar()
//saludar()

//return nos devuelve un valor, saludar() se convierte en algo
//despues del return, no se ejecuta nada más de la funcion 

/*function saludar (){
    alert("hola")
    return 3;

}

let saludo = saludar ()

document.write(saludo)
*/


/*let num1 = 32
let num2 = 12
let res = num1 + num2
document.write(res)*/


// para hacer que una funcion cambie su contendido ( parametros)

/*function suma(num1,num2){  // hacer eso es lo mismo que declara la funcion, pero solo dentro de la variable
    let res = num1 + num2 
    document.write(res + "<br>")
}

suma(13,32)
suma(34,78)*/

//OTRA FORMA

/*function suma (num1,num2){
    let res = num1 + num2
    return res
}

let resultado = suma (20,25)

document.write(resultado);*/


//function saludar(nombre){
  //  let frase = `Hola ${nombre}!`;
    //console.log(frase);
//}

//saludar("pedro") // que no se olviden los parentesis y las comillas / Las variables solo existen dentro de la funcio

//OTRA FORMA MÁS




const saludar = (nombre)=>{
    let frase = `Hola ${nombre} ¿Como estas?`;
    document.write(frase)
}
saludar("pedro")



