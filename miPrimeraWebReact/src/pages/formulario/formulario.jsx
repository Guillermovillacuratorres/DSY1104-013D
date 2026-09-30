import { useState } from "react";
import App_navbar from "../../components/navbar/navbar";
import App_alert from "../../components/alert/alert";

function Formulario() {
    const [txtNombre,setTxtNombre] = useState("");
    const [txtEdad, setTxtEdad] = useState(0);
    const [showAlert,setShowAlert] = useState(false);
    const [msgAlert, setMsgAlert] = useState("");
    const [disenoAlert, setDisenoAlert] = useState("primary");



    function validarTexto(valor,nombre) {
        if (valor.trim().length == 0) {
            //alert("El " + nombre + "  no debe estar vacio.");
            setDisenoAlert("danger");
            setMsgAlert("El " + nombre + "  no debe estar vacio.");
            setShowAlert(true);
            return true;
        }
        return false;
    }


    function validarNumero(valor, nombre) {
        if (valor <= 0) {
            alert("La " + nombre  + " no debe ser menor o igual a cero.");
            return true;
        }
        return false;
    }
    function guardar() {
        if (validarTexto(txtNombre,"nombre") == true) {
            return;
        }else if(validarNumero(txtEdad,"edad") == true){
            return;
        }
        else{
            console.log("GUARDADO",txtNombre);
        }
    }

    return(
        <>
            <App_navbar/>
            <App_alert mostrarAlerta={showAlert} cerrarAlerta={() => setShowAlert(false)} variant={disenoAlert} msg={msgAlert}/>
            <div className="row m-3">
                <div className="col-6">
                    <label htmlFor="txtNombre">Nombre:</label>
                    <input value={txtNombre} onChange={(e) => setTxtNombre(e.target.value)} id="txtNombre" className="form-control" type="text" />
                </div>
                <div className="col-6">
                    <label htmlFor="txtEdad">Edad:</label>
                    <input value={txtEdad} onChange={(e) => setTxtEdad(e.target.value)} className="form-control" id="txtEdad" type="text" />
                </div>
                <div className="col-12 mt-3">
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </div>
            </div>
        </>
    );
}
export default Formulario;