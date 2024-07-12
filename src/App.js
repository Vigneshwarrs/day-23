import './App.css';
import Cards  from './component/Cards';

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

function App() {
  return (
    <div className="App">
      <Cards products={products}></Cards>
    </div>
  );

}

export default App;
