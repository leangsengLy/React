
import './App.css';
import Navbar2 from './Component/Navbar2';
function App() {
  const link ={ title : 'Home' , path : '/home' };
  return (
    <div className="App">
            <div className='title'> Food_Cambodia</div>
            <div>
               <ul>
                  <li><a href='https://www.youtube.com/watch?v=rbWO7iy0Pas'>Youtube</a></li>
                  <li>Servie</li>
                  <li>Contact</li>
                  <li>Setting</li>
               </ul>
            </div>
            <Navbar2 />
           
    </div>
  );
}

export default App;
