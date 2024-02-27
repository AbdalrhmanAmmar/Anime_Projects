import Button from "../UI_shared/Button";
import Input from "../UI_shared/Input";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="flex flex-col justify-center py-10 h-[100%] sm:px-6 lg:px-8 text-center gap-y-3 ">
      <h1 className="font-semibold text-3xl">Sign In</h1>
      <Button variant="Google" className="flex items-center justify-between">
        <span className="w-7 h-7 ">
          <FaGoogle className="" size={25} />
        </span>
        <h2 className="font-extrabold">Sign up With Google</h2>
      </Button>
      <span className="font-bold">or Use Your email password</span>
      <form action="">
        <div className="flex flex-col gap-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="password" type="password" />
        </div>
        <Button>Sign In</Button>
      </form>
    </div>
  );
}

export default Login;
