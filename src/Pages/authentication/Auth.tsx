import { useState } from "react";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import "./authentication.css";

function Auth() {
  const [Active, setActive] = useState("");
  const onActive = () => {
    setActive(".container.active");
    console.log("first");
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 to-blue-200 flex items-center justify-center flex-col h-screen">
      <div className="container">
        <div
          className={`absolute top-0 h-full transition-all duration-600 ease-in-out  ${
            Active ? "active" : "sign-up"
          }`}
        >
          <Signup />
        </div>
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out Sign-in">
          <Login />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button onClick={onActive}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
