import './App.css';
import { Container, Navbar, Card, Button, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const products = [{
    title: "iphone 15 pro",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 1,34,000",
    actual_price: "₹ 1,24,000"
  }, 
  {
    title: "Samsaung s24 ultra",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 1,29,000",
    actual_price: "₹ 1,24,000"
  },
  {
    title: "iQoo 12 5G",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 59,000",
    actual_price: "₹ 52,999"
  },
  {
    title: "Vivo x100",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 75,000",
    actual_price: "₹ 69,999"
  },
  {
    title: "Realme GT 6",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 51,999",
    actual_price: "₹ 44,999"
  },
  {
    title: "Nothing 2",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 59,999",
    actual_price: "₹ 39,999"
  },
  {
    title: "CMF 1",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 25,000",
    actual_price: "₹ 19,999"
  },
  {
    title: "Xiaomi 14 civi",
    rating: "⭐⭐⭐⭐",
    original_price: "₹ 54,999",
    actual_price: "₹ 42,999"
  }]
  return (
    <div className="App">
      <Cards obj={products}></Cards>
    </div>
  );

}

function Cards({ obj }) {
  const [cart, setCart] = useState(0);


  function handleCart(e) {
    if (e.target.textContent.includes("Add")) {
      setCart(cart + 1);
      e.target.textContent = "Remove form Cart";
    } else if (e.target.textContent.includes("Remove")) {
      setCart(cart - 1);
      e.target.textContent = "Add to cart";
    }
  }

  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand >Mobile Market</Navbar.Brand>
            <Navbar.Text>Carts: {cart}</Navbar.Text>
          </Container>
        </Navbar>
        <Container className='px-4 px-lg-5 mt-5'>
        <Row className='gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4'>
          {
            obj.map((o) => {
              return (
                <Col className='mb-5'>
                  <Card>
                    <Card.Img variant="top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" />
                    <Card.Body>
                      <Card.Title>{o.title}</Card.Title>
                      <Card.Text>{o.rating}</Card.Text>
                      <Card.Text><span style={{ textDecoration: "line-through" }}>{o.original_price}</span>  {o.actual_price}</Card.Text>
                      <Button variant="primary" onClick={(e) => handleCart(e)}>Add to Card</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}


export default App;
