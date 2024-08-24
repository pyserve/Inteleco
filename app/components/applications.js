import { scopes } from "../variables/applications";

const Applications = () => {
    return(
    <div className="" id="">
        <div className="container">
            <div className="fs-1">AI & ML Applications Across Industries</div>
            <div className="">
                Explore how AI and ML are revolutionizing industries, from healthcare and finance to manufacturing and education, by driving innovation, enhancing efficiency, and opening new possibilities across diverse sectors.
            </div>
            <div className="row align-items-stretch pt-5">
                {scopes.map((scope, idx) => idx < 9 && (
                <div className="col-md-4 my-3" key={idx}>
                    <div className="card h-100 shadow-lg border-0 rounded">
                    <div className="position-relative">
                        <img src={"/img/lists/" + "list5" + ".jpg"} className="w-100" />
                        <div className="position-absolute start-50 top-0 translate-middle-x">
                            <span className="fs-1 px-3 py-1 bg-danger text-white rounded-bottom-circle">{idx+1}</span>
                        </div>
                    </div>
                    <div className="card-header bg-light text-dark fs-4 py-2">
                        <div className="ms-2 text-center">{scope.industry}</div>
                    </div>
                    <div className="card-body list-unstyled p-3 rounded list-background">
                        {scope.applications.map((app, idx) => (
                        <li key={idx} className="mb-3">
                            <strong className="text-dark-purple fs-6">{idx+1}. {app.name}:</strong> 
                            <span className="ms-1">{app.description}</span>
                        </li>
                        ))}
                    </div>
                    <div className="m-2 d-flex justify-content-start align-items-center">
                        <button className="me-2 my-1 btn btn-sm btn-outline-danger">Explore</button>
                        <button className="ms-2 my-1 btn btn-sm btn-outline-dark">Consult Now</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Applications;