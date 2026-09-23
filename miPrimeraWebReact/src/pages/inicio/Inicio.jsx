import estilos from './inicio.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


function Inicio() {
  const navigate = useNavigate();


  function navegarNosotros() {
    console.log("Navegar Nosotros");
    navigate('/nosotros/100');
  }

    return(
            <>
            
            <h1 className={estilos.titulo}>Hooola</h1>
            <img src="https://img.magnific.com/psd-gratis/linda-escena-perro-marron-blanco_23-2150179279.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <button onClick={navegarNosotros}>Ir a nosotros</button>
            <BasicExample></BasicExample>

            <Link to="nosotros">
              <button>Ir a nosotros LINK</button>
            </Link>
            
            </>   
    );
}

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Inicio;