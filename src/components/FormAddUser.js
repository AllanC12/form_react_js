
//Hook
import {useState, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
//Icons 
import { FaLock , FaUser , FaEnvelope } from 'react-icons/fa'
import { BiHide , BiShow } from 'react-icons/bi'

const FormAddUser = () => {
 //URL Json-server
 const url = `http://localhost:3000/users`

 const form_add_user = useRef()

 //valores para os campos de cadastro de usuário
 const [newUser,setNewUser] = useState('')
 const [emailUser , setEmailUser ] = useState('')
 const [addPasswordUser , setAddPasswordUser ] = useState('')
 const [validatePassword , setValidatePassword] = useState('')
 const [error,setError] = useState('')
 const [successMessage,setSuccessMessage] = useState('')

 //Hook de fetch para inserção de usuário no json-server
 const { insertUser } = useFetch(url)

 const navigate = useNavigate()

 const addNewUser = async (e) => {
    e.preventDefault()

    if(!newUser || !emailUser || !addPasswordUser){
       setError('preencha todos os campos')
    }else if(addPasswordUser !== validatePassword){
       setError('senhas incompatíveis')
       return 
    }else{
      setError('')
       const user = {
          name: newUser,
          email:emailUser,
          password:addPasswordUser
       }

       insertUser(user,"POST")

       setSuccessMessage('Usuário cadastrado com sucesso')
       
       setNewUser('')
       setEmailUser('')
       setAddPasswordUser('')
       setValidatePassword('')
       
     }

     setTimeout(()=>{
        navigate('/')
     },2000)
  }

    //referencia para input de senha
    const inputPassword = useRef()
    const confirmInputPassword = useRef()
    const [showCharPassword, setShowCharPassword] = useState(true)
  
    const showPassword = () => {
      inputPassword.current.setAttribute('type','text')
      confirmInputPassword.current.setAttribute('type','text')
      setShowCharPassword(false)
    }
    const hidePassword = () => {
      inputPassword.current.setAttribute('type','password')
      confirmInputPassword.current.setAttribute('type','password')
      setShowCharPassword(true)
    }

  return (
    <div className="wraper-forms">
                  
     <div className="photo-user">
        <FaUser/>
      </div>

       <form onSubmit={addNewUser} ref={form_add_user} className="form_add_user">

        <div className="wraper">
            <FaUser/>
            <input
            required onChange={(e)=>setNewUser(e.target.value)}
            type="text" 
            placeholder="| Username"
            value={newUser}
            />
        </div>

        <div className="wraper">
            <FaEnvelope/>
            <input 
            required 
            onChange={(e)=>setEmailUser(e.target.value)} 
            type="email" 
            placeholder="| Your email"
            value={emailUser}
            />
        </div>

        <div className="wraper">
            <FaLock/>
            <input
            ref={inputPassword} 
            required onChange={(e)=>setAddPasswordUser(e.target.value)} 
            type="password" 
            placeholder="| Password"
            value={addPasswordUser}
            />
            {showCharPassword && <BiShow id="visibility-password" onClick={showPassword}/>}
            {!showCharPassword && <BiHide id="visibility-password" onClick={hidePassword}/>}
        </div>

        <div className="wraper">
            <FaLock/>
            <input
            ref={confirmInputPassword} 
            required onChange={(e)=> setValidatePassword(e.target.value)} 
            type="password" 
            placeholder="| Confirm the password"
            value={validatePassword}
            />
            {showCharPassword && <BiShow id="visibility-password" onClick={showPassword}/>}
            {!showCharPassword && <BiHide id="visibility-password" onClick={hidePassword}/>}
        </div>

            <input type="submit" value="Create User"/>
            {error && <div className="error"><p>{error}</p></div>}
            {successMessage && <div className="success"><p>{successMessage}</p></div>}
         </form>
   </div>


    )
}

export default FormAddUser