import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const passowrd = e.target.password.value;
    const check = e.target.check.checked

    setRegisterError("");
    setSuccess("");

    if (passowrd.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(passowrd)) {
      setRegisterError(
        "Passowrd should be contain at least one Uppercase character"
      );
      return;
    }
    else if(!check){
      setRegisterError('Plaese accept our trams and condition')
      return;
    }

    createUserWithEmailAndPassword(auth, email, passowrd)
      .then((result) => {
        console.log(result.user);
        setSuccess("Successfully Login");

        //update profile get user name
        updateProfile(result.user, {
          displayName: name,
        })
        .then(()=> console.log('porfile updated'))
        .catch()

        // send email verification msg
        sendEmailVerification(result.user)
        .then(()=> alert('An Email verification sent to your email'))
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={()=> setShowPass(!showPass)} className="border p-1 text-center cursor-pointer">
                  {showPass ? 'Hide': 'Show'}
                </span>
              </div>
              <div>
                <input type="checkbox" name="check" id="trams" />
                <label htmlFor="trams">Accept our trams and condition</label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account? Pleace <Link to={'/login'}><span className="underline">Login</span></Link></p>
            </form>
            {registerError && <p className="text-red-500">{registerError}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
