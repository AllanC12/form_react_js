import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom';
 
import FormLogin from './components/FormLogin';
import FormAddUser from './components/FormAddUser.js';

function App() {

   return (
    <div className="App">
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<FormLogin/> }/>
              <Route path="/adduser" element={<FormAddUser/>} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
