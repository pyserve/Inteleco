"use client";
import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Navbar(){
    const [activeMenu, setActiveMenu] = useState("HOME");
    const handleActiveMenuChange = (e) => {
      setActiveMenu(e.target.innerHTML);
    }
    return(
    <div className="navbar navbar-expand-md navbar-dark bg-dark py-3 sticky-top">
        <div className='container'>
            <a href='' className='navbar-brand'>
              <img 
                src={"/img/logos/svg/logo-no-background.svg"} 
                alt={process.env.APP_NAME} 
                className="rounded brand-image"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenus" 
              aria-controls="navbarMenus" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenus">
              <ul className="navbar-nav align-items-center ms-auto">
                <li className="nav-item">
                  <a href="/home" className={`nav-link ${activeMenu === "HOME" && "active"}`} 
                    onClick={e => handleActiveMenuChange(e)}>HOME</a>
                </li>
                <li className="nav-item">
                  <a href="/ai-consultation" className={`nav-link ${activeMenu === "AI CONSULTATION" && "active"}`} 
                    onClick={e => handleActiveMenuChange(e)}>AI CONSULTATION</a>
                </li>
                <li className="nav-item">
                  <a href="/services" className={`nav-link ${activeMenu === "SERVICES" && "active"}`} 
                    onClick={e => handleActiveMenuChange(e)}>SERVICES</a>
                </li>
                <li className="nav-item">
                  <a href="/demos" className={`nav-link ${activeMenu === "DEMO" && "active"}`} 
                    onClick={e => handleActiveMenuChange(e)}>DEMO</a>
                </li>
                <li className="nav-item">
                  <a href="/blogs" className={`nav-link ${activeMenu === "BLOGS" && "active"}`} 
                    onClick={e => handleActiveMenuChange(e)}>BLOGS</a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className={`nav-link ${activeMenu === "CONTACT" && "active"}`} 
                    onClick={e => handleActiveMenuChange(e)}>CONTACT</a>
                </li>
                <li className="nav-item">
                  <a href="/accounts/login" className={`nav-link ${activeMenu === "LOGIN" && "active"}`}>
                    <button className="btn btn-outline-danger" 
                      onClick={e => handleActiveMenuChange(e)}>LOGIN</button>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
}