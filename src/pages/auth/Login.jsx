import React, { useState } from "react";
import {
  RiMailFill,
  RiLockFill,
  RiEyeFill,
  RiEyeOffLine,
} from "react-icons/ri";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-xl">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8">
        Iniciar sesión
      </h1>
      <form className="">
        <button className="flex items-center gap-4 bg-secondary-900 w-full justify-center py-3 px-4 rounded-full mb-8 text-gray-100">
          {" "}
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            className="w-4 h-4"
          />{" "}
          Ingresa con Google
        </button>
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 outline-none bg-secondary-900 w-full rounded-lg"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="relative">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 px-8 outline-none bg-secondary-900 w-full rounded-lg"
            placeholder="Contraseña"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          ) : (
            <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
