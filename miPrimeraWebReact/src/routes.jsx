import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import Nosotros from "./pages/nosotros/nosotros";
import Formulario from "./pages/formulario/formulario";

export const routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<Inicio/>
        },
        {
            path:'nosotros/:paraIdAuto',
            element:<Nosotros/>
        },
        {
            path:'formulario',
            element:<Formulario/>
        }
    ]
);

