import { cerrarSesion, getToken } from "../auth/auth";

const API_URL = import.meta.env.VITE_API_URL;

export async function request(endpoint, method="GET",body) {
//console.log("1111111111 --->  ", API_URL);
const token = getToken();

const headers = {
    "Content-type": "application/json"
}

if (token) {
    headers.Authorization = `Bearer ${token}`;
}

const req = await fetch(`${API_URL}${endpoint}`,{
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
});

    if (req.status === 401 && token) {
        cerrarSesion();
        window.location.href = "/login";
        return;
    }

    if(!req.ok) throw new Error(`Error ${req.status}`);

    return req.status === 204 ? null : req.json();

}




