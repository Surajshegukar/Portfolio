import './App.css';
import './mediaqueries.css'
import About from './components/About';
import Contact from './components/Contact';
import Experince from './components/Experince';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Project from './components/Project';

function App() {
  return (
    <div className='app'>
    <Home/>
    <Profile/>
    <About/>
    <Experince/>
    <Project/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
