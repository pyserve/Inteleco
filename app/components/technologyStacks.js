const TechnologyStacks = () => {
    return(
    <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <div className="fs-1 my-2">Technology Stacks</div>
            <div className="my-2">
              Our AI and ML consulting services are powered by cutting-edge tools, frameworks, and platforms such as TensorFlow, PyTorch, and scikit-learn. We leverage cloud-based solutions like AWS, Azure AI, and Google Cloud to ensure scalability and efficiency. In line with the latest advancements, we incorporate state-of-the-art innovations such as OpenAI's GPT models and Meta's LLaMA, enabling us to deliver next-generation AI solutions tailored to your business needs.
            </div>
            <div className="mt-4">
              <button className="me-1 my-2 btn btn-md btn-outline-danger">AI/ML Services</button>
              <button className="ms-1 my-2 btn btn-md btn-outline-dark">Choose Demo Now</button>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img src="/img/lists/list4.jpg" className="w-100" />
          </div>
          <div className="col-md-12 order-3 order-md-3">
            <div className="row">
              {['llama3.1', 'chatgpt', 'azure', 'aws', 'pytorch', 'tensorflow'].map((image, idx) => (
                <div className="col-auto col-md-2 my-2" key={idx}>
                  <img src={'/img/icons/' + image + '.png'} className="rounded-circle icon-lg" />
                  <div className="text-center text-uppercase py-2"><span>{image}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default TechnologyStacks;