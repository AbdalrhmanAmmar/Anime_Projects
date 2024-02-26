function Signup() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50 text-center gap-y-3">
      <h1>Sign up</h1>
      <button>Sign Up with google</button>
      <span>or Use Your email password</span>
      <form action="">
        <div className="flex flex-col gap-y-4">
          <input className="border-2 border-gray-600" type="text" />
          <input className="border-2 border-gray-600" type="text" />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
