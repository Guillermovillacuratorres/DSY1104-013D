import { request } from "./client";

export const getVehiculos = () => request("/vehiculo");
export const getVehiculo = (id) => request(`/vehiculo/${id}`);
export const crearVehiculo = (vehiculo) => request("/vehiculo","POST",vehiculo);
export const actualizarVehiculo = (id, vehiculo) => request(`/vehiculo/${id}`,"PUT",vehiculo); 
export const deteleVehiculo = (id) => request(`/vehiculo/${id}`,"DELETE");
