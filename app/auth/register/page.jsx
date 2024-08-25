import Navbar from "../../home/navbar";
import Link from "next/link";
import { register } from "../../lib/auth";

export default function RegisterPage(){
    return(
        <div className="">
            <Navbar />
            <div className="container py-2">
                <div className="row align-items-center">
                    <div className="col-md-6 my-2">
                        <div>
                            <img src="/img/auth/login2.jpg" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <form method="post" action={async (formData) => {
                            "use server";
                            const resp = await register(formData);
                            console.log(await resp.json());
                        }}>
                            <div className="my-2">
                                <div className="fs-1 text-danger"> 
                                    NextAI Sign Up
                                </div>
                                <div className="mb-2 text-muted">Create your account to start exploring demos and more.</div>
                            </div>
                            <div className="my-2 col-md-8">
                                <input type="text" name="fullName" className="form-control my-1" placeholder="Full Name" required />
                                <input type="email" name="email" className="form-control my-1" placeholder="Email address" required />
                                <input type="password" name="password" className="form-control my-1" placeholder="Password" required />
                                <input type="password" name="confirmPassword" className="form-control my-1" placeholder="Confirm Password" required />
                                <div className="d-flex justify-content-between py-1 small text-secondary">
                                    <div className="form-check">
                                        <input type="checkbox" name="terms_and_conditions" className="form-check-input" required />
                                        <label className="form-check-label">I agree to the terms and conditions</label>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                                </div>
                                <div className="my-2 d-flex align-items-center">
                                    <hr className="w-50" />
                                    <span className="px-2">OR</span>
                                    <hr className="w-50" />
                                </div>
                                <div className="mt-2">
                                    <span className="me-1">Already have an account? </span>
                                    <Link href="/auth/login" className="text-decoration-none text-danger">Log In</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
