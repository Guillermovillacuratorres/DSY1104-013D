import { useNavigate, useParams } from "react-router-dom";
import App_navbar from "../../components/navbar/navbar";

function Nosotros() {
    const navigate = useNavigate();


    const {paraIdAuto} = useParams();


    var listaColores = [
        {
            "id_color":1,
            "nombre_color": "Rojo"
        },
        {
            "id_color":2,
            "nombre_color": "Azul"
        },
        {
            "id_color":3,
            "nombre_color": "Verde"
        }
    ];


    var listaElementosHtml = [];


    for (const i of listaColores) {
        listaElementosHtml.push(
            <h1 key={i.id_color}>{i.nombre_color}</h1>
        );
    }


    function navegarInicio() {
        console.log("PARAMETRO: ", paraIdAuto);
        
        navigate('/');
    }

    return(
        <>
            <App_navbar/>
            <h1>Nosotros</h1>
            <button onClick={navegarInicio}>Ir al inicio</button>
            {listaElementosHtml}
        </>
    );
}
export default Nosotros;