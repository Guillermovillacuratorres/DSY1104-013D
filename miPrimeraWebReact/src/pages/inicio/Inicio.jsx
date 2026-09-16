import estilos from './inicio.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Inicio() {





    return(
            
            <>
            
            <h1 className={estilos.titulo}>Hooola</h1>
            <img src="https://img.magnific.com/psd-gratis/linda-escena-perro-marron-blanco_23-2150179279.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <button>Guardar</button>

            
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


export default BasicExample;