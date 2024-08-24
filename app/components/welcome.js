
const Welcome = () => {
    return(
    <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <img src="/img/svgs/grid1.svg" className="w-100" />
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="fs-1 my-2">Welcome to NextAI</div> 
            <div className="my-2">
              Founded by a team of experts specializing in artificial intelligence, data analytics, and cloud computing, we set out with a clear mission: to simplify the complexities of today’s rapidly expanding data landscape. Our journey began with a focus on helping organizations efficiently manage and analyze their data. Over time, we have strategically expanded our offerings to include a comprehensive suite of products and services, encompassing AI/ML analytics, big data management, quantum software engineering, and more. 
            </div>
          </div>
        </div>
      </div>
    )
}

export default Welcome;