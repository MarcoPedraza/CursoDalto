// Problema de confla 2
// No entiendo lo de free = false/true

let free = false

const validarCliente = (time) =>{
    let edad = prompt("cfrrual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && free == false) {
            alert("Puedes pasar gratis");
            free = true
        }

        else{
            alert("Puedes pasar, pero tienes que pagar");
        }


    }

        else {
            alert("Eres menor de edad y no puedes entrar");
        }


}


validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente (0.6);
validarCliente (1);
validarCliente (2);
validarCliente (2.4)