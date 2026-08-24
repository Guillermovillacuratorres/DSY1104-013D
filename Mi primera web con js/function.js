console.log("Hola");


const KEY_STORAGE = "clave_storage";




function guardar() {
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);

    var apellido = document.getElementById("apellido").value;
    console.log(apellido);

    var direccion = document.getElementById("direccion").value;
    console.log(direccion);

    var edad = document.getElementById("edad").value;
    console.log(edad);

    var lbl_nombre = document.getElementById("lblNombre").textContent = "lo cambie con js";
    
    if (nombre == "") {
        alert("El nombre no debe estar vacío.")
    }else if(apellido == ""){
        alert("El apellido no debe estar vacio.")
    }

    var objeto_user = [
        {
            "nombre":nombre,
            "apellido": apellido,
            "direccion": direccion,
            "edad":edad
        }
    ]

    console.log(objeto_user[0].edad);
    

    console.log(objeto_user);
    

    localStorage.setItem(KEY_STORAGE,JSON.stringify(objeto_user));

    var storage = localStorage.getItem(KEY_STORAGE);
    console.log(JSON.parse(storage));


    
    

}