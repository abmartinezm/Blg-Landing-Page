import React from 'react'
import { NavLink} from 'react-router-dom'
// import {useState} from 'react';
// import HamburgerIcon from '../images/icon-hamburger.svg'
// import {useState, useEffect, useRef} from 'react';
import ArrowIcon from '../images/icon-arrow-dark.svg'
import {useState, useRef} from 'react' 

function Menu(props) {


  const [show, setShow] = useState(null);
   
    const handleClick = (index) => {
      if(index !== show) {
        console.log(index);
        setShow(index)
      }
      else{
        setShow(null)
      }
    }
  


  const contentRef = useRef([]);





  return (

     <div   className={props.show ? 'inactive' : 'mobile-menu active'}  > 

    <ul className="nav-mbl-menu">
                <li className="product-mbl">
                {/* <p className="li-header-mbl">Product <img src={ArrowIcon} onClick={onShow} alt="" className='arrow-menu'/>  </p> */}
                <NavLink to= "/" className= "link-mbl-title"  onClick={() => handleClick(0)} > Product <img src={ArrowIcon}  alt="" className={show === 0 ? ` rotate` : `arrow-menu-2`} /> </NavLink>

                    <div   className={`sub-menu-div ${show === 0 ? "open" : ""}`} ref={(el) => (contentRef.current[0] = el)} >
                    {/* <p className="accordion__number">01</p> */}
                    {/* <Routes location="/product" > */}

                    <NavLink to="/overview" className="link-mbl"   > Overview </NavLink>
                    <NavLink to="/pricing" className="link-mbl" > Pricing </NavLink>
                    <NavLink to="/marketplace" className="link-mbl" > Marketplace </NavLink>
                    <NavLink to="/features" className="link-mbl"   > Features </NavLink>  
                    <NavLink to="/integrations" className="link-mbl"   > Integrations </NavLink> 
                    </div>
                    
                    
                </li>
                <li className="company-mbl">
                <NavLink to= "/" className= "link-mbl-title"  onClick={() => handleClick(1)}  > Company <img src={ArrowIcon}  alt="" className={show === 1 ? ` rotate` : `arrow-menu-2`} /> </NavLink>
                    <div  className={`sub-menu-div2 ${show === 1 ? "open" : ""}`} ref={(el) => (contentRef.current[1] = el)}>
                    {/* <p className="accordion__number">02</p> */}
                    {/* <Routes location="/company" > */}
                    <NavLink to="/about" className="link-mbl"   > About </NavLink>
                    <NavLink to="/team" className="link-mbl"   > Team </NavLink>
                    <NavLink to="/blog" className="link-mbl"   > Blog </NavLink>
                    <NavLink to="/careers" className="link-mbl"   > Careers </NavLink>

                    {/* </Routes> */}
                    </div>
                </li>
                <li className="connect-mbl">
                <NavLink to= "/" className= "link-mbl-title" onClick={() =>handleClick(2)} > Connect <img src={ArrowIcon} alt="" className={show === 2 ? ` rotate` : `arrow-menu-2`}/> </NavLink>
                    <div className={`sub-menu-div3 ${show === 2 ? "open" : ""}`} ref={(el) => (contentRef.current[2] = el)}>
                    {/* <p className="accordion__number">03</p> */}

                    <NavLink to="contact" className="link-mbl"   > Contact </NavLink>
                    <NavLink to="/newsletter" className="link-mbl"   > Newsletter </NavLink>
                    <NavLink to="/linkedin" className="link-mbl"   > LinkedIn </NavLink>

                    </div>
                </li>
                <div className="buttons">
                <button className="login">Login</button>
                <button className="sign-up">Sign up</button>
                </div>
            </ul>
    </div>
    // </Router>

    
  )
}

export default Menu