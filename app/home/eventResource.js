import { events } from "../data/events";
import { resources } from "../data/resources";

const EventResource = () => {
    return(
    <div className="container py-4">
        <div className="fs-1">AI & ML Events/Resources</div>
        <div>
          <div className="my-2 text-justify">
            Stay ahead of the curve with our curated selection of AI and ML events, webinars, and resources. Our team regularly hosts and participates in industry-leading conferences, workshops, and online seminars that cover the latest trends, technologies, and best practices in artificial intelligence and machine learning.
          </div>
        </div>
        <ol className="list-group my-2">
          {events.map((event, idx) => (
            <li className="row justify-content-between align-items-center border" key={idx}>
              <div className="col-md-10 row align-items-center">
                <div className="col-md-4"><img src={"/img/events/" + event.image + ".jpg"} className="w-100" /></div>
                <div className="col-md-8">
                  <div className="fw-bold">{event.title}</div>
                  <div className="py-1 text-justify">{event.description}</div>
                  <div className="my-3">
                    <button className="me-2 btn btn-outline-dark">See Details</button>
                    <button className="ms-2 btn btn-outline-danger">Register Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-2 py-2"><span className="badge bg-dark rounded-pill">{event.date}</span></div>
            </li>
          ))}
        </ol>
        <div className="my-2">
          <div className="py-2 text-justify">
            Explore our resource library for case studies, and research reports that delve into advanced AI topics and provide actionable insights for your business. Whether you’re looking to deepen your knowledge, connect with experts, or discover innovative solutions, our events and resources are designed to empower you with the tools and information you need to thrive in the AI-driven future.
          </div>
        </div>
        <div className="my-2">
          <div className="row">
            {resources.map((resource, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card card-body h-100">
                  <img src={"/img/events/" + resource.image + ".jpg"} className="w-100 resource-image" />
                  <div className="fs-5 mt-3">{resource.title}</div>
                  <div className="py-1 text-secondary text-justify">{resource.description}</div>
                  <div className="my-2">
                    <button className="me-2 btn btn-outline-danger">Explore Resource</button>
                    <button className="ms-2 btn btn-outline-dark">Chat with Expert</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    )
}

export default EventResource;