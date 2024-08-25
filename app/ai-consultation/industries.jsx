import { industries } from "../data/applications"

export default function Industries (){
    return(
        <div className="container py-4">
            <div className="my-2">
                <div className="fs-1">Industry-Specific AI Solutions</div>
                <div className="py-1">
                    Explore our tailored AI solutions designed to meet the unique needs of various industries. From healthcare to finance, we provide expert consultations to help you leverage AI for transformative results.
                </div>
            </div>
            <div className="row align-items-start">
                {industries.map((item, idx) => (
                    <div className="col-md-4 my-2 py-2 border-bottom" key={idx}>
                        <div className="fs-3 my-1">{idx + 1}. {item.industry}</div>
                        <div className="text-justify py-2">{item.description}</div>
                        <div className="my-2">
                            <button className="btn btn-outline-danger">Learn more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}