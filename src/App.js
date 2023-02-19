import './App.css';

import { BrowserRouter } from 'react-router-dom';
 
import FormLogin from './components/FormLogin';

import { useFetch } from './hooks/useFetch';

import { useState } from 'react';

function App() {

   const url = `http://localhost:3000/users`

   const { data:users , insertUser } = useFetch(url)

 
   const [nameUser , setNameUser] = useState(null)
   const [passwordUser , setPasswordUser ] = useState(null)

   const [newUser,setNewUser] = useState(null)
   const [emailUser , setEmailUser ] = useState(null)
   const [newPasswordUser , setNewPasswordUser ] = useState(null)
   const [validatePassword , setValidatePassword] = useState(null)

    const loginUser = (e) => {
         e.preventDefault()

         if(nameUser === null || passwordUser === null){
            alert('insira informações de login')
         }

         
         users && users.forEach((user)=>(
            nameUser === user.name ? (
               passwordUser === user.password ? (
                  alert(`Seja bem vindo ${user.name}`)
               ) : (
                  alert('senha incorreta')
               )
            ) :(
               alert('usuário não encontrado =(')
            )
         ))
    }


    const addNewUser = (e) => {
         e.preventDefault()

         const user = {
            "name": newUser,
            "email":emailUser,
            "password":newPasswordUser
         }

         insertUser(user,"POST")

    }

   return (
    <div className="App">
       <BrowserRouter>
           <FormLogin setNameUser={setNameUser} 
                      setPasswordUser={setPasswordUser} 
                      loginUser={loginUser}
                      addNewUser={addNewUser}
                      setNewUser={setNewUser}
                      setNewPasswordUser={setNewPasswordUser}
                      setEmailUser={setEmailUser}
                      setValidatePassword={setValidatePassword}
            /> 
       </BrowserRouter>
    </div>
  );
}

export default App;
