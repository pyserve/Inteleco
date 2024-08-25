import Navbar from "../home/navbar";
import Footer from "../home/footer";
import { blogs } from "../data/blogs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function AIConsultation () {
    return(
        <div className="">
            <Navbar />
            <div className="container py-4">
                <div className="my-3">
                    <div className="fs-1">Insights and Innovations: Our AI Blog</div>
                    <div className="text-justify">
                        Welcome to our blog, where we share expert insights and the latest developments in AI consulting. Here, you'll find in-depth articles, case studies, and industry trends that highlight how AI can drive transformation in your business. Whether you're exploring new technologies or seeking strategic advice, our blog provides valuable information to help you stay informed and make data-driven decisions. Dive in to discover how AI can elevate your business to new heights.
                    </div>
                </div>
                <div className="row my-4">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="col-md-4 my-2">
                            <div className="card p-2 h-100">
                                <div className="d-flex justify-content-between mb-2">
                                    <div className="text-secondary">
                                        <FontAwesomeIcon icon={faUserCircle} /> {blog.author}
                                    </div>
                                    <div className="text-secondary small">{blog.date}</div>
                                </div>
                                <div>
                                    <img src={"/img/blogs/blog" + (idx+1) + ".jpg"} className="blog-img" alt="" />
                                </div>
                                <div className="my-1">
                                    <div className="fs-5 my-1 text-truncate">{blog.title}</div>
                                    <div className="py-1 text-justify">{blog.summary}</div>
                                </div>
                                <div className="my-1">
                                    <button className="btn btn-outline-danger">Explore Blog</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}