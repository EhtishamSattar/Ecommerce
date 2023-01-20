import './App.css';
import Items from './Components/Items';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Top from './Components/Top';

function App() {
  return (
    <div>
      <Navbar/>
      <Top/>
      <div className='mx-10 mb-3'>
        <Items />
      </div>
      <Footer/>
    </div>

  );
}

export default App;
