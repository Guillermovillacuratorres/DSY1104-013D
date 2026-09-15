import estilos from './inicio.module.css';

function Inicio() {
    return(
            <>

            <h1 className={estilos.titulo}>Hooola</h1>
            <img src="https://img.magnific.com/psd-gratis/linda-escena-perro-marron-blanco_23-2150179279.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <button>Guardar</button>

            </>
            
    );
}

export default Inicio;