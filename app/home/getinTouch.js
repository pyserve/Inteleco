
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
    return(
    <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1 ">
            <div className="fs-1">Are You Ready to Explore the New World with AI.</div>
            <div className="py-1 text-justify">
              Discover cutting-edge advancements and unlock new possibilities with AI-driven innovation.
            </div>
            <div className="my-2">
              <button className="btn btn-lg btn-outline-danger">
                <FontAwesomeIcon icon={faArrowRight}/> Get In Touch
              </button>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img src="/img/svgs/grid5.svg" className="w-100" />
          </div>
        </div>
      </div>
    )
}

export default GetInTouch;