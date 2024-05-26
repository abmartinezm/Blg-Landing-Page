import React from "react";

import Logo from "../images/logo.svg";
import HamburgerIcon from "../images/icon-hamburger.svg";
import Menu from "./Menu";
import DesktopNav from "../Components/DesktopNav";
import { useState } from "react";

function Header(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  // if (width > breakpoint) {

  // }

  // const isDesktopResolution =  window.screen.width > 600

  const [visible, setVisible] = useState(false);

  const onVisible = () => {
    console.log("hide");
    setVisible(!visible);
  };

  const handleClk = (index) => {
    if(index !== visible) {
      console.log(index);
      setVisible(index)
    }
    else{
      setVisible(null)
    }
  }

  return (
    <div className="Header-cont">
      <div className="Container">
        <div className="nav-menu">
          <div className="flex-nav">
            <section className="left">
              <img src={Logo} alt="" className="header-logo-img" />
              {width > breakpoint && (
                
                <DesktopNav
                  setVisible={setVisible}
                  visible={visible}
                  handleClk={handleClk}
                />
                
              )}
            </section>

            <section className="right">
              <img
                src={HamburgerIcon}
                alt=""
                onClick={onVisible}
                className="header-ham-icon"
              />
              <div className="buttons">
                <button className="login">Login</button>
                <button className="sign-up">Sign up</button>
              </div>
              
              {visible ? (<div className="overlay" onClick={() => setVisible(false)} />) : null}
              {visible ? <Menu /> : '' }
            </section>
          </div>
        </div>

        <div className="header-content">
          <h1 className="title">A modern publishing platform</h1>
          <p className="subtitle">
            Grow your audience and build your online brand.
          </p>
          <div className="btn-container">
            <input type="button" value="Start for free" className="btn-trial" />
            <input
              type="button"
              value="Learn More"
              className="btn-learn-more"
            />
          </div>
        </div>

        {/* <Menu {show && <i className="fas fa-sign-out-alt user--nav--icon"></i> Logout} /> */}
      </div>
    </div>
  );
}

export default Header;
