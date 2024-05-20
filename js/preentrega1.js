function saludo(){
    alert("Bienvenidos a nuestra pagina");
}
saludo();

let ingresarEdad;

do{
    ingresarEdad = parseInt(prompt("Ingrese su edad"));    
    if(ingresarEdad >= 18){
        alert("Su edad es de " + ingresarEdad + " años, por lo tanto es Mayor de Edad");
    } 
    else if(ingresarEdad > 0 && ingresarEdad < 18){
        alert("Su Edad es de " + ingresarEdad + " años, por lo tanto es Menor de Edad, debe ser Mayor de Edadd");
    }    
    else if(ingresarEdad <= 0){
        alert("La Edad ingresada debe ser mayor a 0");
    }
    else{
        alert("Debe ingresar un valor númerico !!!"); 
    }
}
while(ingresarEdad <= 0 || ingresarEdad < 18 || !ingresarEdad);

let despedidad = ("Gracias por visitar nuestra pagina");
alert(despedidad);