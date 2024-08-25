import { members } from "../data/teams";
import ContactForm from "./contactForm";
import AddressMap from "../home/addressMap";
import Link from "next/link";

export default function OurTeam(){
    return(
        <div className="container py-4">
            <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-2">
                    <img src={"/img/teams/team.svg"} className="w-100" alt="team" 
                        style={{maxHeight: 400}} />
                </div>
                <div className="col-md-6 order-2 order-md-1">
                    <div className="fs-1">Our Team at NextAI</div>
                    <div className="" style={{textAlign: "justify"}}>
                        At Inteleco, our team is composed of passionate AI and ML experts dedicated to driving innovation and delivering impactful solutions for your business. With diverse backgrounds in data science, software engineering, and industry-specific applications, we work collaboratively to tailor AI strategies that align with your goals. Our commitment to excellence and continuous learning ensures that we stay at the forefront of technological advancements, empowering your business to thrive in an AI-driven world. Connect with us to discover how our expertise can transform your vision into reality.
                    </div>
                </div>
            </div>
            <div className="row align-items-center my-2">
                {members.map((member, idx) => (
                    <div key={idx} className="col-md-6 my-2">
                        <div className="card card-body h-100 text-center">
                            <div className="">
                                <img src={"/img/teams/" + member.image + ".jpg"} alt={member.name} 
                                    className="team-img shadow-lg rounded-circle p-1" />
                            </div>
                            <div className="fs-4 my-1">{member.name}</div>
                            <div className="fs-6 my-1">{member.title}</div>
                            <div className="py-1" style={{textAlign: "justify"}}>{member.description}</div>
                            <div className="my-2">
                                <Link href={member.social_media.LinkedIn} target="_blank">
                                    <button className="mx-1 my-1 btn btn-sm btn-outline-danger">Follow In LinkedIn</button>
                                </Link>
                                <button className="mx-1 my-1 btn btn-sm btn-outline-dark">Schedule Appointment</button>
                            </div>
                        </div>
                    </div>
                ))}
                <ContactForm />
            </div>
            <AddressMap />
        </div>
    )
}