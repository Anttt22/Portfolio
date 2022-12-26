import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>hello iAm</h5>
        <h1>Hja Bimty</h1>
        <h5 className="text-light">full stacj deeloper</h5>
        <CTA/>
        <HeaderSocials/>
        
        <div className="me">          
          <img src={ME} alt='me'></img>
        </div>
        
        <a href='#contact' className='scroll__down'>scroll down</a>

      </div>
    </header>
  )
}

export default Header