import React, { useContext, useRef, useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ShopContext } from '../../contexts/ShopContexts/Shopcontext';
import nav_dropdown from '../assets/nav-dropdown.png'


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {gettotalcartitem}=useContext(ShopContext);
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav_logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef}className="nav_menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration:'none'}} to='/'>shop</Link> {/* Use Link component from react-router-dom */}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{textDecoration:'none'}} to='/mens'>men</Link> {/* Use Link component */}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link  style={{textDecoration:'none'}} to='/womens'>women</Link> {/* Use Link component */}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{textDecoration:'none'}} to='/kids'>kids</Link> {/* Use Link component */}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav_login_cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>  }
        
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link> {/* Use Link component */}
        <div className="nav_cart_count">{gettotalcartitem()}</div>
      </div>
    </div>
  );
}

export default Navbar;
