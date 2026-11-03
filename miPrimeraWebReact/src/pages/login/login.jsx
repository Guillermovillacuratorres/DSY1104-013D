import { useState } from "react";
import { login } from "../../api/authAPi";
import { guardarToken } from "../../auth/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    async function ingresar(e) {
    e.preventDefault();
    try{
        const respuesta = await login(username,password);
        guardarToken(respuesta.token);
        navigate("/inicio");
    }catch{
        console.log("Error al iniciar");        
    }

  }

  return (
    <div className="container mt-5" style={{ maxWidth: '350px' }}>
      <h3 className="mb-3 text-center">Login</h3>
      <form onSubmit={ingresar}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
    </div>
  );
}