//CSS
import './css_components/FormLogin.css'

//Hooks
import { useRef , useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom'

//Icons
import { FaLock , FaUser } from 'react-icons/fa'
import { BiHide , BiShow } from 'react-icons/bi'

//Components
import FormAddUser from './FormAddUser';
   
const FormLogin = () => {
  //URL Json-server
  const url = `http://localhost:3000/users`

  //users: usuários cadastrados
  //insertUser: método vindo do hook de fetch para cadastrar novo usuário
  const { data:users } = useFetch(url)

  //valores para os campos de login
  const [nameUser , setNameUser] = useState('')
  const [passwordUser , setPasswordUser ] = useState('')

  //referencia para input de senha
  const inputPassword = useRef()
  const [showCharPassword, setShowCharPassword] = useState(true)

  const showPassword = () => {
    inputPassword.current.setAttribute('type','text')
    setShowCharPassword(false)
  }
  const hidePassword = () => {
    inputPassword.current.setAttribute('type','password')
    setShowCharPassword(true)
  }

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
              alert(`Seja Bem vindo(a) ${nameUser}`)
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
                    type="text" 
                    placeholder="| Username"
                    value={nameUser}
                  />
              </div>

              <div className="wraper">
                  <FaLock/>
                  <input  
                    ref={inputPassword}
                    required 
                    onChange={(e)=> setPasswordUser(e.target.value)} 
                    type="password" 
                    placeholder="| Password"
                    value={passwordUser}
                  />
                  {showCharPassword && <BiShow id="visibility-password" onClick={showPassword}/>}
                  {!showCharPassword && <BiHide id="visibility-password" onClick={hidePassword}/>}
                  
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