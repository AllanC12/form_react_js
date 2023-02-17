import { NavLink } from 'react-router-dom'

import FormLogin from "../components/FormLogin"

import { FaUser } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'


const FormAddUser = () => {
  return (
    <form>
    <div className="container-form">

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

         <div className="user-data">

            <label>
              <input type="checkbox" />
                Remember me?
            </label>

 
        </div>
        
    </div>
        <input type="submit" value="Add user"/>
 </form>
  )
}

export default FormAddUser