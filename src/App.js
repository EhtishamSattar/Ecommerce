import './App.css';
import Items from './Components/Items';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Cart />
      <div className='mx-10 mb-3'>
        <Items />
      </div>
      <Footer/>
    </div>

  );
}

export default App;
