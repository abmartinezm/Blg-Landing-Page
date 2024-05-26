import React from "react";
import chartImg from "../images/illustration-editor-desktop.svg";
import phonesImg from "../images/illustration-phones.svg";
import laptopImg from "../images/illustration-laptop-mobile.svg";

export default function Body() {
  return (
    <div className="body-container">
      <h2 className="body-title">Designed for the future</h2>
      <div className="layer-1">
      
      <section className="section-1">
        
        <img src={chartImg} alt="Graphic chart" className="chart" />
      </section>

      <section className="section-2">
        <h3 className="body-subtitle-1">Introducing an extensible editor</h3>
        <p className="subtitle-text-1">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h4 className="body-subtitle-2">Robust content management</h4>
        <p className="subtitle-text-2">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </section>
      </div>
      

      <section className="section-3">
        <div className="notice-board">
          <img src={phonesImg} alt="" className="phones-img" />
          
          <div className="inner-text">
          <h4 className="notice-title">State of the Art Infrastructure</h4>
          <p className="notice-subtitle">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
          </div>
        </div>
      </section>

    <div className="layer-2">
    <img src={laptopImg} alt="" className="laptop-img"/>
    <section className="section-4">
        

        <h3 className="body-subtitle-3">Free, open, simple</h3>
        <p className="subtitle-text-3">
        Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
        </p>
        <h4 className="body-subtitle-4">Powerful tooling</h4>
        <p className="subtitle-text-4">
        Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
  capable of producing even the most complicated sites.
        </p>
      </section>
    </div>
      
     
    </div>
  );
}
