dineroCofla = prompt("cuanto dinero cofla?");
dineroRoberto = prompt("cuanto dinero tiene roberto?")
dineroPedro = prompt("cuanto dinero tiene pedro?")

//De string a numero, porque lo que se escribe en el prompt es un entero,
//no es un numero
//Pero aparte hay que meter toda laopracion entre parentesis

parseInt(dineroCofla);

//Cofla

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6)); 
}

else if (dineroCofla >= 1 && dineroCofla < 1) {
    alert("comprate el helado de crema")
    alert("y te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1) {
    alert("comprate el helado de heladix")
    alert("y te sobran" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1) {
    alert("comprate el helado de heladovich")
    alert("y te sobran" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 1) {
    alert("comprate el helado de helardo")
    alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("helado con confites o el pote de 1/4kg")
    alert("y te sobran" + (dineroCofla - 2.9));
}

else {
    alert("lo siento, no tienes dinero suficiente")

}

// Roberto

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("comprate el helado de agua")
}

else if (dineroRoberto >= 1 && dineroRoberto < 1) {
    alert("comprate el helado de crema")
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1) {
    alert("comprate el helado de heladix")
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1) {
    alert("comprate el helado de heladovich")
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 1) {
    alert("comprate el helado de helardo")
}

else if (dineroRoberto >= 2.9) {
    alert("helado con confites o el pote de 1/4kg")
}

else {
    alert("lo siento, no tienes dinero suficiente")
}

// Pedro

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("comprate el helado de agua")
}

else if (dineroPedro >= 1 && dineroPedro < 1) {
    alert("comprate el helado de crema")
}

else if (dineroPedro >= 1.6 && dineroPedro < 1) {
    alert("comprate el helado de heladix")
}

else if (dineroPedro >= 1.7 && dineroPedro < 1) {
    alert("comprate el helado de heladovich")
}

else if (dineroPedro >= 1.8 && dineroPedro < 1) {
    alert("comprate el helado de helardo")
}

else if (dineroPedro >= 2.9) {
    alert("helado con confites o el pote de 1/4kg")
}

else {
    alert("lo siento, no tienes dinero suficiente")
}






