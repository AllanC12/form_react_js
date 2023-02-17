 import './App.css';

 
 import { BrowserRouter , Routes , Route } from 'react-router-dom';
 
 import FormAddUser from './pages/FormAddUser'
 import FormLogin from './components/FormLogin';

function App() {

   return (
    <div className="App">
       <BrowserRouter>
        <FormLogin/> 
          <Routes>  
             <Route path="/FormAddUser" element={<FormAddUser/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
