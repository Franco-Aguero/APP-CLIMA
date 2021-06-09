import './App.css';
import {Route} from 'react-router-dom';

import Home from './Components/home';
import NavBar from './Components/NavBar/navBar';

function App() {
  return (

    <div >
      <Route exact path='/' component={Home} />
      <Route path='/navBar' component={NavBar} />
    </div>

  );
}

export default App;
