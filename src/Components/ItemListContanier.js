import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemListContanier() {
  return (
    <div>
    <Card style={{ width: '9rem' }}>
    <Card.Img variant="top" src="/descarga.jpg" />
    <Card.Body>
      <Card.Title>Snowboard Spider</Card.Title>
      <Card.Text>
        Snowboard 160cm en colores verde y gris
      </Card.Text>
      <Button variant="primary">Agregar al carrito</Button>
    </Card.Body>
  </Card>

  

  </div>

  
  )
}

export default ItemListContanier