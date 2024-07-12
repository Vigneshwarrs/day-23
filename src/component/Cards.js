import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Nav from './Nav';
import Cart from './Cart';

export default function Cards({ products }) {
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
      <Nav cart={cart} />
      <Container className='px-4 px-lg-5 mt-5'>
        <Row className='gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4'>
          {products.map((product, index) => {
            return (
              <Col key={index} className='mb-5'>
                <Cart product ={product} handleCart={handleCart} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
