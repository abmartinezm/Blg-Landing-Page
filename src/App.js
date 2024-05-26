
import './App.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import {useState} from 'react' 

function App() {
  
  const [show, setShow] = useState(null);
   
  const handleClick = (index) => {
    if(index !== show) {
      console.log(index);
      setShow(index)
    }
    else{
      setShow(null)
    }
  }

  return (
    <div className="App">
      <Header handleClick={handleClick}  />
      {/* <Menu  /> */}
      <Body  />
      <Footer/>
    </div>
  );
}

export default App;
