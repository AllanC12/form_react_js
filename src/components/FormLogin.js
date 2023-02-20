//CSS
import './css_components/FormLogin.css'

//Hooks
import { useRef , useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom'

//Icons
import { FaLock , FaUser , FaEnvelope } from 'react-icons/fa'

//Components
import FormAddUser from './FormAddUser';
   
const FormLogin = () => {
  //URL Json-server
  const url = `http://localhost:3000/users`


  
  //valores para os campos de login
  const [nameUser , setNameUser] = useState('')
  const [passwordUser , setPasswordUser ] = useState('')

  //users: usuários cadastrados
  //insertUser: método vindo do hook de fetch para cadastrar novo usuário
  const { data:users } = useFetch(url)

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

 
   return (
      <div className="wraper-forms" >
        <div className="container-form">
          
            <div className="photo-user">
              <FaUser/>
             </div>
    
            <div className="options-user">

               <div className="wraper-options-user">
                   <NavLink to='/' >Login</NavLink>
                </div>

               <div className="wraper-options-user">
                  <NavLink to="/adduser" >Add user</NavLink> 
                </div>

            </div>

            <form onSubmit={loginUser} className="form-login">

              <div className="wraper">
                  <FaUser/>
                  <input  
                    required 
                    onChange={(e) => setNameUser(e.target.value)} 
                    type="text" placeholder="| Username"
                    value={nameUser}
                  />
              </div>

              <div className="wraper">
                  <FaLock/>
                  <input  
                    required 
                    onChange={(e)=> setPasswordUser(e.target.value)} 
                    type="password" placeholder="| Password"
                    value={passwordUser}
                  />
              </div>

                    
                  <div className="user-data">
                    <label>
                      <input type="checkbox" />
                        Remember me?
                    </label>
                  </div>

                <input type="submit" value="Login" />

            </form>

      </div>
   

     </div>
  )
}

export default FormLogin