import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";


const Login = () => {
    const handleLogin = e=>{
        e.preventDefault()
        const email = e.target.email.value;
        const passowrd = e.target.password.value;
        console.log(email, passowrd);
        createUserWithEmailAndPassword(auth, email, passowrd)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="w-1/2 mx-auto bg-gray-300 p-10 my-5">
            <h2 className='text-3xl my-5'>Login Now</h2>
            <form onSubmit={handleLogin} className="space-y-5 ">
                <input type="email" name="email"  placeholder="Enter Email"  className="p-3"/>
                <br />
                <input type="password" name="password"placeholder="Enter Password"  className="p-3"/>
                <br />
                <button className="btn primary">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default Login;