import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faFacebookMessenger, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
    <div className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-4">
              <div className="fs-5 text-uppercase">
                <img src="/img/logos/svg/logo-no-background.svg" className="w-50" />
              </div>
              <div className="row my-2">
                <div className="col-auto m-1 ms-0">Terms and Conditions</div>
                <div className="col-auto m-1 ms-0">Contact Us</div>
              </div>
              <div className="">&copy; 2023-2024</div>
            </div>
            <div className="col-md-4">
              <div className="fs-5 text-uppercase">Quicks Menus</div>
              <ul className="">
                {['home', 'ai-consultation', 'services', 'demos', 'blogs', 'contact'].map((item, idx) => (
                  <li key={idx}>
                    <a href={"/" + item} className="nav-link text-uppercase py-1">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <div className="fs-5 text-uppercase">Connect with Us</div>
              <div className="row my-2">
                <div className="col-auto fs-1">
                  <a href="https://www.facebook.com/edartwebsolutions/" target="_blank" className="nav-link">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
                <div className="col-auto fs-1">
                  <a href="https://www.messenger.com/" target="_blank" className="nav-link">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                  </a>
                </div>
                <div className="col-auto fs-1">
                  <a href="https://www.youtube.com/@pyserve" target="_blank" className="nav-link">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
                <div className="col-auto fs-1">
                  <a href="https://github.com/pyserve" target="_blank" className="nav-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;