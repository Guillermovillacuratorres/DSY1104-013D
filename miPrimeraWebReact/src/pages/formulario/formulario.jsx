import { useState } from "react";
import App_navbar from "../../components/navbar/navbar";

function Formulario() {
    const [txtNombre,setTxtNombre] = useState("");



    function validarTexto(valor) {
        if (valor.trim().length == 0) {
            alert("El valor no debe estar vacio.");
            return true;
        }
        return false;
    }


    function guardar() {
        if (validarTexto(txtNombre) == true) {
            return;
        }else{
            console.log("GUARDADO",txtNombre);
        }
    }

    return(
        <>
            <App_navbar/>
            <div className="row m-3">
                <div className="col-6">
                    <label htmlFor="txtNombre">Nombre:</label>
                    <input value={txtNombre} onChange={(e) => setTxtNombre(e.target.value)} id="txtNombre" className="form-control" type="text" />
                </div>
                <div className="col-12 mt-3">
                    <button onClick={guardar} className="btn btn-primary">Guardar</button>
                </div>
            </div>
        </>
    );
}
export default Formulario;