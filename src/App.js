import './App.css';
import { Container, Navbar } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const products = [{
    title: "iphone 15 pro",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 1,34,000",
    Actual_price: "₹ 1,24,000"
  },{
    title: "Samsaung s24 ultra",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 1,29,000",
    Actual_price: "₹ 1,24,000"
  },
  {
    title: "Samsung s24",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 79,999",
    Actual_price: "₹ 74,999"
  },
  {
    title: "iQoo 12 5G",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 59,000",
    Actual_price: "₹ 52,999"
  },
  {
    title: "Vivo x100",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 75,000",
    Actual_price: "₹ 69,999"
  },
  {
    title: "Realme GT 6",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 51,999",
    Actual_price: "₹ 44,999"
  },
  {
    title: "Nothing 2",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 59,999",
    Actual_price: "₹ 39,999"
  },
  {
    title: "CMF 1",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 25,000",
    Actual_price: "₹ 19,999"
  },
  {
    title: "Xiaomi 14 civi",
    rating: "⭐⭐⭐⭐",
    Original_price: "₹ 54,999",
    Actual_price: "₹ 42,999"
  }]
  return (
    <div className="App">
      <Cards obj={products}></Cards>
    </div>
  );

}

function Cards(obj) {
  const [cart, setCart] = useState(0);


  return (
    <div>
      <Container>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mobile Market</Navbar.Brand>
          <Navbar.Text>Carts: {cart}</Navbar.Text>
        </Container>
      </Navbar>
      </Container>
    </div>
  );
}


export default App;
