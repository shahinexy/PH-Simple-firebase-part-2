
const Login = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto bg-gray-300 p-10 my-5">
            <h2 className='text-3xl my-5'>Login Now</h2>
            <form className="space-y-5">
                <input type="text" name="name" id="" placeholder="Enter Name"  className="p-3"/>
                <br />
                <input type="email" name="email" id="" placeholder="Enter Email"  className="p-3"/>
                <br />
                <input type="passowrd" name="password" id="" placeholder="Enter Email"  className="p-3"/>
            </form>
            </div>
        </div>
    );
};

export default Login;