import './App.css';
import Items from './Components/Items';
import Cart from './Components/Cart';

function App() {
  return (
    <div>
      <Cart />
      <div className='mx-10 mb-10'>
        <Items />
      </div>
    </div>

  );
}

export default App;
