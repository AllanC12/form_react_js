import './App.css';

import { BrowserRouter } from 'react-router-dom';
 
import FormLogin from './components/FormLogin';

import { useFetch } from './hooks/useFetch';

import { useState , useRef} from 'react';

function App() {

   const url = `http://localhost:3000/users`
 
   const { data:users , insertUser } = useFetch(url)

   //campos de login
   const [nameUser , setNameUser] = useState('')
   const [passwordUser , setPasswordUser ] = useState('')
   const checkRemeberUser = useRef()

   //campos de cadastro de usuário
   const [newUser,setNewUser] = useState('')
   const [emailUser , setEmailUser ] = useState('')
   const [addPasswordUser , setAddPasswordUser ] = useState('')
   const [validatePassword , setValidatePassword] = useState('')

    const loginUser = (e) => {
         e.preventDefault()

         const userValidate = users.filter(user => (
            user.name === nameUser && user.password === passwordUser
         ))

         if(userValidate.length === 0){
            alert(`Faça seu cadastro ou verifique se os dados estão corretos`)
            return 
         }
         
         if(userValidate[0].name === nameUser){
            if(userValidate[0].password === passwordUser){
               alert(`Seja Bem vindo ${nameUser}`)
            }
         }

 
         setNameUser('')
         setPasswordUser('')
    }

 
   const addNewUser = async (e) => {
      e.preventDefault()

      if(!newUser || !emailUser || !addPasswordUser){
         alert('preencha todos os campos')
      }else if(addPasswordUser !== validatePassword){
         alert('senhas incompatíveis')
         return 
      }else{
         const user = {
            name: newUser,
            email:emailUser,
            password:addPasswordUser
         }

         insertUser(user,"POST")
         alert('Usuário cadastrado com sucesso =)')
         
         setNewUser('')
         setEmailUser('')
         setAddPasswordUser('')
         setValidatePassword('')
      }

    }

   return (
    <div className="App">
       <BrowserRouter>
           <FormLogin nameUser={nameUser}
                      passwordUser={passwordUser}
                       setNameUser={setNameUser} 
                      setPasswordUser={setPasswordUser} 
                      loginUser={loginUser}
                      addNewUser={addNewUser}
                      setNewUser={setNewUser}
                      setEmailUser={setEmailUser}
                      setAddPasswordUser={setAddPasswordUser}
                      setValidatePassword={setValidatePassword}
                      newUser={newUser}
                      emailUser={emailUser}
                      addPasswordUser={addPasswordUser}
                      validatePassword={validatePassword}
            /> 
       </BrowserRouter>
    </div>
  );
}

export default App;
