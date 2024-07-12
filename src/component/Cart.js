import {Card, Button} from 'react-bootstrap';
export default function Cart({product, handleCart}) {
    return (
        <Card>
            <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.rating}</Card.Text>
                <Card.Text><span style={{ textDecoration: "line-through" }}>{product.original_price}</span>{product.actual_price}</Card.Text>
                <Button variant="primary" onClick={(e) => handleCart(e)}>Add to Card</Button>
            </Card.Body>
        </Card>
    );
}