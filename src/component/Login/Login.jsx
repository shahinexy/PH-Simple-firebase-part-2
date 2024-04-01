import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [success, setSuccess] = useState("");
    const [errormsg, setErrormsg] = useState('')
    const handleLogin = e=>{
        e.preventDefault()

        setErrormsg('')
        setSuccess('')

        const email = e.target.email.value;
        const passowrd = e.target.password.value;
        console.log(email, passowrd);
        signInWithEmailAndPassword(auth, email, passowrd)
        .then(result => {
            console.log(result.user);
            setSuccess("Successfully Login");
        })
        .catch(error =>{
            console.log(error.message);
            setErrormsg('Envalid password')
        })
    }

    return (
        <div>
            <div className="w-1/2 mx-auto bg-gray-300 p-10 my-5">
            <h2 className='text-3xl my-5 font-bold'>Login Now</h2>
            <form onSubmit={handleLogin} className="space-y-5 ">
                <input type="email" name="email"  placeholder="Enter Email"  className="p-3"/>
                <br />
                <input type="password" name="password"placeholder="Enter Password"  className="p-3"/>
                <br />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <button className="btn primary">Login</button>
                <p>New to this website? Pleace <Link to={'/register'}> <span className="underline">Register</span> </Link></p>
                <br />
                {
                    success && <p className="text-green-500">{success}</p>
                }
                {
                    errormsg && <p className="text-red-500">{errormsg}</p>
                }
            </form>
            </div>
        </div>
    );
};

export default Login;