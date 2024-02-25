import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Major pathname error, REMEMBER! 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Body from './components/body';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Body /> }/> 
        </Routes>
      </>
    </Router>
  );
}

export default App;