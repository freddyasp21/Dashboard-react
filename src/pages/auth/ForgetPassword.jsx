import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
} from "react-icons/ri";

function ForgetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-xl lg:w-[450px] w-auto">
      <h1 className="text-3xl font-bold tracking-[5px] text-white mb-8 text-center uppercase">
        Recuperar <span className="text-primary">Contraseña</span>
      </h1>
      <form className="mb-8">
        <div className="relative mb-8">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 outline-none bg-secondary-900 w-full rounded-lg focus:border focus:border-primary"
            placeholder="Correo electrónico"
          />
        </div>

        <div className="">
          <button
            className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 hover:bg-secondary-900/50 transition-all"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
      <div className="flex flex-col gap-4 items-center text-gray-100">
        <span className="flex items-center gap-2">
          ¿Ya tienes cuenta?{""}
          <Link
            to="/login"
            className="text-primary hover:text-gray-100 transition-colors"
          >
            Ingresar
          </Link>
        </span>
        <span className="flex items-center gap-2">
        ¿No tienes cuenta?{""} 
        <Link to="/registro" className="text-primary hover:text-gray-100 transition-colors">
            Registrate
            </Link>
        </span>
      </div>
    </div>
    </div>
    
  );
}

export default ForgetPassword;
