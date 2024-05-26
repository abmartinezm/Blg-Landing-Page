import React from 'react'
import { NavLink} from 'react-router-dom'
import ArrowIcon from '../images/icon-arrow-light.svg'
import {useRef} from 'react' 

export default function DesktopNav(props) {
    
    const contentRef = useRef([]);
    // console.log(props)
  return (
    
    <div className='dsktp-view'>
        
      <ul className="nav-mbl-menu-2">
                <li className="product-mbl">
                {/* <p className="li-header-mbl">Product <img src={ArrowIcon} onClick={onShow} alt="" className='arrow-menu'/>  </p> */}
                <NavLink to= "/" className= "link-dsktp" onClick={() => props.handleClk(0)}  > Product <img src={ArrowIcon}  alt="" className={props.visible === 0 ? ` rotate` : `arrow-menu-2`} />  </NavLink>

                    <div   className={`sub-menu-div-mbl ${props.visible === 0 ? "open" : ""}`} ref={(el) => (contentRef.current[0] = el)}   >
                    {/* <p className="accordion__number">01</p> */}
                    {/* <Routes location="/product" > */}

                    <NavLink to="/overview" className="link-dsktp-menu"   > Overview </NavLink>
                    <NavLink to="/pricing" className="link-dsktp-menu" > Pricing </NavLink>
                    <NavLink to="/marketplace" className="link-dsktp-menu" > Marketplace </NavLink>
                    <NavLink to="/features" className="link-dsktp-menu"   > Features </NavLink>  
                    <NavLink to="/integrations" className="link-dsktp-menu"   > Integrations </NavLink> 
                    </div>
                    
                    
                </li>
                <li className="company-mbl">
                <NavLink to= "/" className= "link-dsktp" onClick={() => props.handleClk(1)}  > Company <img src={ArrowIcon}  alt="" className={props.visible === 1 ? ` rotate` : `arrow-menu-2`} />  </NavLink>
                    <div  className={`sub-menu-div-mbl2 ${props.visible === 1 ? "open" : ""}`} ref={(el) => (contentRef.current[1] = el)}  >
                    {/* <p className="accordion__number">02</p> */}
                    {/* <Routes location="/company" > */}
                    <NavLink to="/about" className="link-dsktp-menu"   > About </NavLink>
                    <NavLink to="/team" className="link-dsktp-menu"   > Team </NavLink>
                    <NavLink to="/blog" className="link-dsktp-menu"   > Blog </NavLink>
                    <NavLink to="/careers" className="link-dsktp-menu"   > Careers </NavLink>

                    {/* </Routes> */}
                    </div>
                </li>
                <li className="connect-mbl">
                <NavLink to= "/" className= "link-dsktp" onClick={() => props.handleClk(2)} > Connect <img src={ArrowIcon}  alt="" className={props.visible === 2 ? ` rotate` : `arrow-menu-2`} />   </NavLink>
                    <div className={`sub-menu-div-mbl3 ${props.visible === 2 ? "open" : ""}`} ref={(el) => (contentRef.current[2] = el)} >
                    {/* <p className="accordion__number">03</p> */}

                    <NavLink to="contact" className="link-dsktp-menu"   > Contact </NavLink>
                    <NavLink to="/newsletter" className="link-dsktp-menu"   > Newsletter </NavLink>
                    <NavLink to="/linkedin" className="link-dsktp-menu"   > LinkedIn </NavLink>

                    </div>
                </li>
                
            </ul>

    </div>
  )
}
