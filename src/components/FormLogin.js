import './css_components/FormLogin.css'

import { NavLink ,Link } from 'react-router-dom'

//icons
import { FaUserPlus , FaLock , FaUser } from 'react-icons/fa'

import FormAddUser from '../pages/FormAddUser'
  
const FormLogin = () => {

const handleAddUser = () => {
   return <FormAddUser/>
}
  
   return (
      <form>
        <div className="container-form">
          
            <div className="photo-user">
                   <FaUserPlus/>
             </div>
    
            <div className="options-user">
                <NavLink to={'/'}>Login</NavLink>
                <NavLink onClick={handleAddUser}>Add user</NavLink>
            </div>

   
            <div className="wraper">
              <FaUser/>
              <input type="text" placeholder="| Username"/>
            </div>

            <div className="wraper">
              <FaLock/>
              <input type="password" placeholder="| Password"/>
            </div>

             <div className="user-data">

                <label>
                  <input type="checkbox" />
                    Remember me?
                </label>
 
 
            </div>
            
        </div>
            <input type="submit" value="Login"/>
     </form>
  )
}

export default FormLogin