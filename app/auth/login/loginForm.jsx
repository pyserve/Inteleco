import Link from "next/link";
import { loginUser } from "../../lib/auth";

export default function LoginForm(){
    return(
    <form action={async (formData) => {
            "use server";
            const resp = await loginUser(formData);
            // console.log(await resp.json());
        }}>
        <div className="my-2">
            <div className="fs-1 text-danger"> 
                NextAI Log In
            </div>
            <div className="mb-2 text-muted">Log In to your account to explore demos and more.</div>
        </div>
        <div className="my-2 col-md-8">
            <input type="email" className="form-control my-1" name="email" placeholder="Email address" required />
            <input type="password" className="form-control my-1" name="password" placeholder="Password" required />
            <div className="d-flex justify-content-between py-1 small text-secondary">
                <div className="d-flex">
                    <div className="form-check">
                        <input type="checkbox" name="remember" className="form-check-input" />
                    </div>
                    <div className="w-100">Remember Me</div>
                </div>
                <div>Forget Password ?</div>
            </div>
            <div className="mt-2">
                <button type="submit" className="btn btn-dark w-100">Log In</button>
            </div>
            <div className="my-2 d-flex align-items-center">
                <hr className="w-50" />
                <span className="px-2">OR</span>
                <hr className="w-50" />
            </div>
            <div className="mt-2">
                <span className="me-1">Does not have an account? </span>
                <Link href="/auth/register" className="text-decoration-none text-danger">Create Here</Link>
            </div>
        </div>
    </form>
    )
}