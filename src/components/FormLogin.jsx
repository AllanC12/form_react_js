import './css_components/FormLogin.css'
import { NavLink } from 'react-router-dom'

//icons
import { FaUser } from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'
 
const FormLogin = () => {
  return (
      <form>
        <div className="container-form">
          
            <div className="photo-user">
               <FaUser/>
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
 
                <NavLink to='FormAddUser' >Add user</NavLink>

            </div>
            
        </div>
            <input type="submit" value="Login"/>
     </form>
  )
}

export default FormLogin