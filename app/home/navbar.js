"use client";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
// import 'bootstrap/dist/js/bootstrap.bundle';

export default function Navbar(){
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? 'active' : '';
  };
  return(
    <div className="navbar navbar-expand-md navbar-dark bg-dark py-3 sticky-top">
        <div className='container'>
            <Link href='/' className='navbar-brand'>
              <img 
                src={"/img/logos/svg/logo-no-background.svg"} 
                alt={process.env.APP_NAME} 
                className="rounded brand-image"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenus" 
              aria-controls="navbarMenus" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenus">
              <ul className="navbar-nav align-items-center ms-auto">
                <li className={"nav-item "}>
                  <Link href="/home" className={`nav-link ` + isActive("/home")} >
                    HOME
                  </Link>
                </li>
                <li className={"nav-item "}>
                  <Link href="/ai-consultation" className={`nav-link ` + isActive("/ai-consultation")} >
                    AI CONSULTATION
                  </Link>
                </li>
                <li className={"nav-item "}>
                  <Link href="/services" className={`nav-link ` + isActive("/services")} >
                    SERVICES
                  </Link>
                </li>
                <li className={"nav-item "}>
                  <Link href="/demos" className={`nav-link ` + isActive("/demos")} >
                    DEMOS
                  </Link>
                </li>
                <li className={"nav-item "}>
                  <Link href="/blogs" className={`nav-link ` + isActive("/blogs")} >
                    BLOGS
                  </Link>
                </li>
                <li className={"nav-item "}>
                  <Link href="/contact" className={`nav-link ` + isActive("/contact")} >
                    CONTACT
                  </Link>
                </li>
                <li className={"nav-item "}>
                  <Link href="/auth/login" className={`nav-link ` + isActive("/login")} >
                    <button className="btn btn-outline-danger" >
                      LOGIN
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
}