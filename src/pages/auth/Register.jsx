import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUser3Line,
} from "react-icons/ri";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-xl lg:w-[450px] w-auto">
        <h1 className="text-3xl font-bold tracking-[5px] text-white mb-8 text-center uppercase">
          Crear <span className="text-primary">Cuenta</span>
        </h1>
        <form className="mb-8">
          <button className="flex items-center gap-4 bg-secondary-900 w-full justify-center py-3 px-4 rounded-full mb-8 text-gray-100 hover:text-white hover:bg-secondary-900/50 transition-all">
            {" "}
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              className="w-4 h-4"
            />{" "}
            Registrate con Google
          </button>
          <div className="relative mb-4">
            <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 outline-none bg-secondary-900 w-full rounded-lg focus:border focus:border-primary"
              placeholder="Nombre(s)"
            />
          </div>
          <div className="relative mb-4">
            <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 outline-none bg-secondary-900 w-full rounded-lg focus:border focus:border-primary"
              placeholder="Apellido(s)"
            />
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 outline-none bg-secondary-900 w-full rounded-lg focus:border focus:border-primary"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 outline-none bg-secondary-900 w-full rounded-lg focus:border focus:border-primary"
              placeholder="Contraseña"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 outline-none bg-secondary-900 w-full rounded-lg focus:border focus:border-primary"
              placeholder="Confirmar contraseña"
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div className="">
            <button
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 hover:bg-secondary-900/50 transition-all"
              type="submit"
            >
              Registrarme
            </button>
          </div>
        </form>

        <span className="flex items-center gap-2 justify-center">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-gray-100 transition-colors"
          >
            Ingresa
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
