import Navbar from "../../home/navbar";
import LoginForm from "./loginForm";

export default async function LoginPage(){
    return(
        <div className="">
            <Navbar />
            <div className="container py-2">
                <div className="row align-items-center">
                    <div className="col-md-6 my-2">
                        <div>
                            <img src="/img/auth/login1.jpg" alt="login-image" className="w-100" />
                        </div>
                    </div>
                    <div className="col-md-6 my-2">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}