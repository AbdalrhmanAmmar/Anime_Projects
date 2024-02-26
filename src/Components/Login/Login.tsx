function Login() {
  return (
    <div className="flex flex-col h-[100%]  justify-center py-10 sm:px-6 lg:px-8 bg-slate-50 text-center gap-y-3">
      <h1>Sign In</h1>
      <button>Sign Up with google</button>
      <span>or Use Your email password</span>
      <form action="">
        <div className="flex flex-col gap-y-4">
          <input className="border-2 border-gray-600" type="text" />
          <input className="border-2 border-gray-600" type="text" />
        </div>
        <button>SignIn</button>
      </form>
    </div>
  );
}

export default Login;
