import logo from './logo.svg';
import './App.css';
import Navbar from './components/Headers/Navbar';
import Downsider from './components/Headers/Downsider';
import Mainbody from './components/Body/Mainbody';
import Footer from './components/lowers/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Downsider/>
    <Mainbody/>
    <Footer/>
    </>
  );
}

export default App;
