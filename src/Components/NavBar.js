import React from 'react'
import './NavBar.css'
import { FaInstagram, FaRegHeart, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="/imgs/Logoluka.png" id="logo" alt="" />
      <Link className='nav-item' to="/">home</Link>
      {/* <div className="nav-item">GALLERY</div> */}
      <Link className='nav-item' to="/gallery">gallery</Link>
      <div className="nav-list-item" id="shop">
        <button><Link className='nav-item' to="/shop">shop</Link></button>
        <div className="dd shop-drop">
          <div className="dd-item shop-list-item">Apparel</div>
          <div className="dd-item shop-list-item">Figurines</div>
          <div className="dd-item shop-list-item">Costumes</div>
          <div className="dd-item shop-list-item">EPs</div>
          <div className="dd-item shop-list-item">Accessories</div>
        </div>
      </div>
      <div className="nav-list-item">
        <button>tours</button>
        <div className="dd tours-drop">
          <div className="dd-item tour-list-item">Asia</div>
          <div className="dd-item tour-list-item">America</div>
          <div className="dd-item tour-list-item">Europe</div>
          <div className="dd-item tour-list-item">Antartica</div>
        </div>
      </div>
      <div className="nav-list-item">
        <button>music</button>
        <div className="dd music-drop">
          <div className="dd-item music-list-item">Spotify</div>
          <div className="dd-item music-list-item">
            <a href='https://soundcloud.com/megurine-luka-7'>Sound Cloud</a>
          </div>
          <div className="dd-item music-list-item">Youtube</div>
        </div>
      </div>
    
    <div className="icons-container">
      <div className="nav-item icon" id='IG'><FaInstagram/></div>
      <div className="nav-item icon" id='FB'><FaFacebook/></div>
      <div className="nav-item icon" id='HT'><FaRegHeart/></div>
    </div>
    </nav>
  )
}

export default NavBar

