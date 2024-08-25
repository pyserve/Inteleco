import Navbar from "../home/navbar";
import Footer from "../home/footer";
import { demos } from "../data/demos";

export default function AIConsultation () {
    
    return(
        <div className="">
            <Navbar />
            <div className="container py-4">
                {demos.map((demo, idx) => (
                    <div className="row align-items-center" key={idx}>
                        <div className={"col-md-6 order-" + idx%2}>
                            <img src={demo.media.image} alt="" className="w-100" />
                        </div>
                        <div className="col-md-6">
                            <div className="row mt-2">
                                {demo.tags.map((tag, idx) => (
                                    <div key={idx} className="col-auto my-1">
                                        <span className="rounded-5">{tag}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="fs-1">{demo.title}</div>
                            <div className="text-justify">{demo.description}</div>
                            <div className="d-flex justify-content-start my-1 fst-italic small text-muted">
                                <div className="me-2">Authors: <strong>{demo.authors.join(', ')}</strong> & </div>
                                <div className="me-2">Industry: <strong>{demo.domain}</strong></div>
                            </div>
                            <ol className="list-group list-group-numbered my-2">
                                <div className="py-1 fs-5">Business Solutions: </div>
                                {demo.business_solutions.map((solution, idx) => (
                                    <li key={idx} className="list-group-item border-0">{solution}</li>
                                ))}
                            </ol>
                            <div className="my-3">
                                <button className="mx-1 btn btn-outline-danger">Live Demo</button>
                                <button className="mx-1 btn btn-outline-dark">Chat Support</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}