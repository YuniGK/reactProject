import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/o-logo.jpg'
import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'Home', 'Sale'];
    const navigae = useNavigate();

    const goToLogin = () => {
        navigae('/login');
    }
  return (
    <div className='nav-content'>
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <h4>로그인</h4>
        </div>

        <div className='logo-content'>
            <img src={logo} alt='logo' />
        </div>

        <div className='menu-content'>
            <ul className='menu'>
                {
                    menuList && 
                        menuList.map((menu, idx)=>(
                            <li key={idx}>{menu}</li>
                        ))
                }
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text'></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar