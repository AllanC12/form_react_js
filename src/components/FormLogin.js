//CSS
import './css_components/FormLogin.css'

//Hooks
import { useRef , useState } from 'react'
import { NavLink } from 'react-router-dom'

//Icons
import { FaLock , FaUser , FaEnvelope } from 'react-icons/fa'

//Components
import FormAddUser from '../pages/FormAddUser'
  
const FormLogin = () => {

  const form_login = useRef()
  const form_add_user = useRef()
  const [valueBtn,setValueBtn] = useState('Login')

   
  const handleForm = (element) => {
 
     if(element.innerText === 'Add user'){
        form_login.current.style.setProperty('display', 'none')
        form_add_user.current.style.setProperty('display', 'block')
        setValueBtn('Create User')
     }else{
        form_login.current.style.setProperty('display','block')
        form_add_user.current.style.setProperty('display','none')
        setValueBtn('Login')
     }

  }

   return (
      <form>
        <div className="container-form">
          
            <div className="photo-user">
              <FaUser/>
             </div>
    
            <div className="options-user">

               <div className="wraper-options-user">
                   <NavLink to={'/'} onClick={ (e) => handleForm(e.target) }>Login</NavLink>
                </div>

               <div className="wraper-options-user">
                  <NavLink to={'/adduser'} onClick={ (e) => handleForm(e.target) }>Add user</NavLink> 
                </div>

            </div>

               <div ref={form_login} className="form-login">

                  <div className="wraper">
                      <FaUser/>
                      <input type="text" placeholder="| Username"/>
                    </div>

                    <div className="wraper">
                      <FaLock/>
                      <input type="password" placeholder="| Password"/>
                    </div>
              </div>

       <div ref={form_add_user} className="form_add_user">
          <div className="wraper">
              <FaUser/>
              <input type="text" placeholder="| Full name"/>
           </div>

            <div className="wraper">
              <FaEnvelope/>
              <input type="text" placeholder="| Your email"/>
            </div>

            <div className="wraper">
              <FaLock/>
              <input type="password" placeholder="| Password"/>
            </div>

            <div className="wraper">
              <FaLock/>
              <input type="password" placeholder="| Confirm the password"/>
            </div>
            
       </div>

             <div className="user-data">
                <label>
                  <input type="checkbox" />
                    Remember me?
                </label>
            </div>
            
            <input type="submit" value={valueBtn} />

          </div>
   

     </form>
  )
}

export default FormLogin