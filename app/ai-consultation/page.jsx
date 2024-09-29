import Navbar from "../home/navbar";
import Footer from "../home/footer";
import Industries from "./industries";
import GetInTouch from "../home/getinTouch";
import { consultations } from "../data/consultation";
import Image from "next/image";

export default function AIConsultation () {
    return(
        <div className="">
            <Navbar />
            <div className="container py-4">
                <div className="col-md-9">
                    <div className="fs-1">Maximizing Business Impact with AI Innovation</div>
                    <div className="text-justify">
                        Harness the transformative potential of AI to propel your business forward. By integrating intelligent systems into your operations, you can unlock new efficiencies, drive innovation, and gain a competitive edge. From automating routine processes to generating deep insights from complex data, AI empowers your business to operate smarter and achieve more. With a strategic approach, AI becomes a powerful tool that not only enhances current capabilities but also paves the way for future growth and success.
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-5 my-2">
                        <img
                            src="/img/consultation/whyus.jpg"
                            alt="Why Us"
                            className="w-100 h-100 rounded"
                        />
                    </div>
                    <div className="col-md-7 my-2">
                        <div className="fs-1 my-2">Your Trusted Partner for Business Transformation</div>
                        <div className="text-justify">
                            {consultations.map((item, idx) => (
                                <div key={ idx} className="d-flex align-items-start mb-4">
                                    <div className="fs-1 text-danger me-2">{idx+1}.</div>
                                    <div className="mx-1">
                                        <div className="fs-5 fw-bold text-dark">{item.title}</div>
                                        <div>{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Industries />
            <GetInTouch />
            <Footer />
        </div>
    )
}