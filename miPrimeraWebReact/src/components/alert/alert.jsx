import Alert from 'react-bootstrap/Alert';
function App_alert({mostrarAlerta,cerrarAlerta, variant="danger",msg}) {
  return (
        <Alert  
            dismissible
            variant={variant}
            show={mostrarAlerta}
            onClose={cerrarAlerta}
            >
          {msg}
        </Alert>
  );
}
export default App_alert;