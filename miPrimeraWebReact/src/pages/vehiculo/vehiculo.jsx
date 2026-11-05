import React, { useEffect, useState } from 'react';
import { crearVehiculo, deteleVehiculo, getVehiculos } from '../../api/vehiculoApi';
import { getCategorias } from '../../api/categoriaApi';
import App_navbar from '../../components/navbar/navbar';

export default function Vehiculos() {

    const [autos, setAutos]=useState([]);
    const [categorias, setCategorias] = useState([]);

    // ESTADOS INDIVIDUALES PARA CADA INPUT
    const [marca, setMarca] = useState('');
    const [color, setColor] = useState('');
    const [idCategoria, setIdCategoria] = useState('');

    const [vehiculoEliminar, setVehiculoEliminar] = useState(null);



    useEffect(() => {
        getVehiculos()
            .then(setAutos)
            .catch((e) => console.log(e) );
    }, [] )


        useEffect(() => {
        getCategorias()
            .then(setCategorias)
            .catch((e) => console.log(e) );
    }, [] )



   async function agregarVehiculo(){
    //validaciones de los input
        const auto = {
            marca: marca.trim(),
            color: color.trim(),
            categoria: {idCategoria:Number(idCategoria)}
        };

        try{
            await crearVehiculo(auto);   
            console.log("Vehiculo registrado!!!");            
        }catch{
            console.log("Error al guardar");
            
        }
  }




  async function eliminarVehiculo(auto){
    console.log("---->",auto);
    
    try {
        await deteleVehiculo(auto.idVehiculo);
        console.log("Vehiculo eliminado!!!");
    } catch (error) {
        console.log("error: ", error);        
    }
  }


  function editar() {
    
  }



  return (
    <>
    <App_navbar/>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          
          {/* FORMULARIO */}
          <div className="card mb-5 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Registrar Nuevo Vehículo</h4>
            </div>
            <div className="card-body">
              <form onSubmit={agregarVehiculo}>
                <div className="row g-3">
                  
                  <div className="col-md-6">
                    <label className="form-label">Marca</label>
                    <input
                      type="text"
                      className="form-control"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                      placeholder="Ej. Chevrolet"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      placeholder="Ej. Corsair"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Categoría</label>
                    <select
                      className="form-select"
                      value={idCategoria}
                      onChange={(e) => setIdCategoria(e.target.value)}
                    >
                      <option value="">Selecciona una categoría...</option>
                      {categorias.map((cat) => (
                        <option key={cat.idCategoria} value={cat.idCategoria}>
                          {cat.nombreCategoria}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-success px-4">
                      Guardar Vehículo
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

          {/* TABLA */}
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">Listado de Vehículos</h4>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Marca</th>
                      <th>Color</th>
                      <th>Categoría</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {autos.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center text-muted py-3">
                          No hay vehículos registrados.
                        </td>
                      </tr>
                    ) : (
                      autos.map((v) => (
                        <tr key={v.idVehiculo}>
                          <td>{v.idVehiculo}</td>
                          <td>{v.marca}</td>
                          <td>{v.color}</td>
                          <td>
                            <span className="badge bg-secondary">
                              {v.categoria.nombreCategoria}
                            </span>
                          </td>
                            <td>
                                <button onClick={() => eliminarVehiculo(v)} className='btn btn-danger'>Eliminar</button>
                                <button className='btn btn-warning ms-3'>Editar</button>
                            </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
