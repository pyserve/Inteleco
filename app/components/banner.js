

const Banner = () => {
    return(
    <div className="position-relative" id="banner">
        <div className="position-absolute top-50 start-50 translate-middle w-100">
            <div className="row justify-content-center m-2">
                <div className="col-sm-12 col-md-8 col-lg-6">
                    <div className="fs-1 text-white">Empowering Innovation with Advanced AI Solutions</div>
                    <div className="my-2 text-light">
                        Next AI is at the forefront of artificial intelligence, delivering cutting-edge solutions that drive business transformation. Our expertise in AI empowers organizations to unlock new levels of efficiency, optimize decision-making, and achieve sustainable growth. Partner with Next AI to leverage intelligent, scalable solutions tailored to your business needs and stay ahead in a rapidly evolving digital landscape.
                    </div>
                    <div className="my-1">
                        <div className="mt-4 me-3 ms-0 btn btn-lg btn-light">Choose Demos</div>
                        <div className="mt-4 ms-3 me-0 btn btn-lg btn-outline-warning">Explore more</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner;