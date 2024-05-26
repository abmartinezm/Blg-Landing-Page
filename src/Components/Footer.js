import React from 'react'
import logoImg from '../images/logo.svg'
import { NavLink} from 'react-router-dom'

export default function Footer() {
  return (

        <footer className="footer">
            <div className="nav-menu-container">
                <div className="img-container">
                <img src={logoImg} alt="" className='logo-img'/>
                </div>

                <ul className="nav-menu-footer">
                    <li className="product">
                    <NavLink to= "/" className= "li-name-1 li-header"> Product</NavLink>
                    <NavLink to= "/overview" className= "link"> Overview</NavLink>
                    <NavLink to= "/pricing" className= "link"> Pricing</NavLink>
                    <NavLink to= "/marketplace" className= "link"> Marketplace</NavLink>
                    <NavLink to= "/features" className= "link"> Features</NavLink>
                    <NavLink to= "/integrations" className= "link"> Integrations</NavLink>
                    </li>
                    <li className="company">
                        {/* <p className="li-name-2 li-header">Company</p> */}
                        <NavLink to= "/" className= "li-name-2 li-header"> Company </NavLink>
                        <NavLink to= "/about" className= "link"> About </NavLink>
                        <NavLink to= "/team" className= "link"> Team </NavLink>
                        <NavLink to= "/blog" className= "link"> Blog </NavLink>
                        <NavLink to= "/careers" className= "link"> Careers </NavLink>

                    </li>
                    <li className="connect">
                    <NavLink to= "/" className= "li-name-3 li-header"> Connect </NavLink>
                    <NavLink to= "/contact" className= "link"> Contact </NavLink>
                    <NavLink to= "/newsletter" className= "link"> Newsletter </NavLink>
                    <NavLink to= "/linkedin" className= "link"> LinkedIn </NavLink>
                    </li>
                </ul>
                {/* <ul className="company"></ul>
                <ul className="connect"></ul> */}
            </div>
        </footer>
  )
}
