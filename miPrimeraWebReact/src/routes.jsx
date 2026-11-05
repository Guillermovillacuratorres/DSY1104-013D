import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Formulario from "./pages/formulario/formulario";
import Login from "./pages/login/login";
import RutaProtegida from "./components/rutaProtegida/rutaProtegida";
import Vehiculos from "./pages/vehiculo/vehiculo";

export const routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'nosotros/:paraIdAuto',
            element:<Nosotros/>
        },
        {
            path:'formulario',
            element:<Formulario/>
        },
        {
            path:'inicio',
            element:<RutaProtegida><Inicio/></RutaProtegida>
        },
        {
            path:'vehiculo',
            element:<RutaProtegida><Vehiculos/></RutaProtegida>
        },
        {
            path:'login',
            element:<Login/>
        }
    ]
);

