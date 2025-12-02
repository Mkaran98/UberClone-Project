import React from "react";

function Register() {
  return (
    <div className="flex flex-col">
      <div className="bg-black h-20">
        <img
          className="object-cover h-full "
          src="https://th.bing.com/th/id/OIP.IIHbR0AWnhz1lAgXV-44NgHaEK?w=280&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt=""
        />
      </div>

      {/* CENTER CONTENT */}
        <div className="flex flex-col items-center h-screen  mt-30 gap-4">
          <h1 className="text-xl font-semibold w-74">
            What's your phone number or email?
          </h1>
          <input
            className="border px-4 py-2 rounded w-74"
            placeholder="Enter phone number"
          />
          <button className="bg-black  text-white w-74 px-6 py-2 rounded">
            Continue
          </button>
          <p className="w-74 text-xs" >By continuing, you agree to calls, including by autodialer, WhatsApp, or texts from Uber and its affiliates.</p>
        </div>
      </div>
  );
}

export default Register;
