import { useState } from "react";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

function Auth() {
  const [Active, setActive] = useState<string>("");

  const onClickSignIn = () => {
    setActive("");
  };

  const onClickRegister = () => {
    setActive(".container.active");
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-blue-200 flex items-center justify-center flex-col h-screen">
      <div className="container bg-white rounded-xl shadow-lg relative overflow-hidden w-96 md:w-full min-h-[480px]">
        <div className="bg-white flex items-center justify-center flex-col px-10 h-full Sign-up">
          <Signup />
        </div>
        <div className="bg-white flex items-center justify-center flex-col px-10 h-full sign-in">
          <Login />
        </div>

        {/* <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out z-50">
          <div className="h-full bg-gradient-to-r from-indigo-400 to-indigo-800 text-black relative left-full w-screen transform translate-x-0 transition-all duration-600 ease-in-out">
            <div className="absolute w-1/2 h-full flex flex-col justify-center items-center text-center p-0 sm:p-6 top-0 transform translate-x-0 transition-all duration-600 ease-in-out ">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button onClick={onClickSignIn}>Sign In</button>
            </div>
            <div className="toggle-panel absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-transform duration-600 ease-in-out">
              <h1>Hello, Freind!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button onClick={onClickRegister}>SignUp</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Auth;
