import { Container, Navbar } from 'react-bootstrap';
export default function Nav({cart}) {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Mobile Market</Navbar.Brand>
          <Navbar.Text>Carts: {cart}</Navbar.Text>
        </Container>
      </Navbar>
    );
}