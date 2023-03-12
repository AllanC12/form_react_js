//CSS
import './css_components/Form.css'

//Hooks
import { useRef , useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { NavLink } from 'react-router-dom'

//Icons
import { FaLock , FaUser } from 'react-icons/fa'
import { BiHide , BiShow } from 'react-icons/bi'
   
const FormLogin = () => {
  //URL Json-server
  const url = `http://localhost:3000/users`

  //users: usuários cadastrados
   const { data:users } = useFetch(url)

  //valores para os campos de login
  const [nameUser , setNameUser] = useState('')
  const [passwordUser , setPasswordUser ] = useState('')
  const [error,setError] = useState('')
  const [successMessage,setSuccessMessage] = useState('')

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

        const userNameValidate = users.filter(user => (
           user.name === nameUser
        ))

        const userPasswordValidate = users.filter(user => (
          user.password === passwordUser
        ))

        if(userNameValidate.length > 0){
          if(userPasswordValidate.length > 0){
            setError('')
            setSuccessMessage(`Seja bem vindo(a) ${nameUser}`)
          }else{
            setError(`Senha incorreta`)
            setSuccessMessage('')
            return
          }
        }else{
          setError(`Nome de usuário não encontrado`)
          setSuccessMessage('')
          return
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
                {error && <div className='error'><p>{error}</p></div>}
                {successMessage && <div className='success'><p>{successMessage}</p></div>}

            </form>

      </div>
   

     </div>
  )
}

export default FormLogin