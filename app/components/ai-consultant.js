

const AIConsultant = () => {
    return(
    <div className="container py-4">
        <div className="fs-1 my-2">Free AI Consultations</div>
        <div className="my-2">
          As AI consultants, we help businesses adopt and integrate AI to boost innovation and efficiency. Our expertise in AI model development, machine learning, and data analytics allows us to deliver customized solutions tailored to industry needs. We work closely with your team from strategy to implementation, ensuring measurable impact and sustainable growth, helping you stay competitive by enhancing customer experiences, streamlining operations, and enabling data-driven decisions.
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div>
              <img src="/img/svgs/grid2.svg" className="w-100" />
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <ul className="list-style-none p-0">
              {[
                  "Comprehensive AI strategy and implementation",
                  "Data-driven decision-making and insights",
                  "End-to-end machine learning model development",
                  "Seamless integration with existing business processes",
                  "Ongoing support and optimization for AI systems"
              ].map((item, idx) => (
                <li className="py-2 d-flex align-items-center" key={idx}>
                  <span className="badge bg-danger rounded-pill p-3 me-2">{idx + 1}</span> 
                  <span className="ms-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
    )
}

export default AIConsultant;