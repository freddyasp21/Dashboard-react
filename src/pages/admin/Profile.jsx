import React, { useState } from "react";
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiLinksLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Switch } from "@headlessui/react";

function Profile() {
  const [enabled, setEnabled] = useState(false);
  const [enabledGit, setEnabledGit] = useState(false);
  const [enabledSlack, setenabledSlack] = useState(false);
  return (
    <>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="">
          {/* avatar */}
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-morena-rostro-sonriente_53876-137688.jpg"
                  alt=""
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-500 text-sm">
                Allowed file types: png, jpg, jpeg.
              </p>
            </div>
          </div>

          {/* name */}

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <p className="">
                Nombre Completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>

          {/* Company */}

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/4 w-full mb-2 md:mb-0">
              <p className="">
                Empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="md:flex-1 w-full">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Nombre de la empresa"
              />
            </div>
          </div>

          {/* Phone */}

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/4 w-full mb-2 md:mb-0">
              <p className="">
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="md:flex-1 w-full">
              <input
                type="tel"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Número de contacto"
              />
            </div>
          </div>

          {/* Pagina web */}

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/4 w-full mb-2 md:mb-0">
              <p className="">
                Página web <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="md:flex-1 w-full">
              <input
                type="tel"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Página web"
              />
            </div>
          </div>

          {/* País */}

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/4 w-full mb-2 md:mb-0">
              <p className="">
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="md:flex-1 w-full">
              <select
                name=""
                id=""
                className="apparence-none w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              >
                <option value="" disabled>
                  Seleccionar país
                </option>
                <option value="Argentina">Argentina</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Perú">Perú</option>
                <option value="México">México</option>
                <option value="Colombia">Colombia</option>
                <option value="Uruguay">Uruguay</option>
              </select>
            </div>
          </div>

          {/* Ciudad */}

          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/4 w-full mb-2 md:mb-0">
              <p className="">
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="md:flex-1 w-full">
              <select
                name=""
                id=""
                className="apparence-none w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
              >
                <option value="" disabled>
                  Seleccionar ciudad
                </option>
                <option value="Bogotá">Bogota</option>
                <option value="Caracas">Caracas</option>
                <option value="Lima">Lima</option>
                <option value="Montevide">Montevideo</option>
                <option value="Ciudad-México">Ciudad de México</option>
                <option value="Buga">Buga</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary text-black py-2 px-4 rounded-lg hover:bg-primary/80 transition-colors">
            Guardar
          </button>
        </div>
      </div>

      {/* Change Password */}

      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">Correo y Contraseña</h1>
        <hr className="my-8 border-gray-500/30" />

        <form action="" className="">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="">
              <h5 className="text-gray-100 text-xl">Correo eléctronico</h5>
              <p className="text-gray-500 text-sm">yvonneMuller@gmail.com</p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors w-full md:w-auto">
                Cambiar Email
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="">
              <h5 className="text-gray-100 text-xl">Contraseña</h5>
              <p className="text-gray-500 text-sm">*****************</p>
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors w-full md:w-auto">
                Cambiar Contraseña
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between bg-blue-500/20 p-4 rounded-lg border border-dashed border-blue-500 mb-8">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center gap-2">
            <RiShieldCheckLine className="text-8xl md:text-4xl text-blue-500" />
            <div className="">
              <h5 className="text-blue-500 text-xl text-center md:text-start mb-2 md:mb-0">Asegure su Cuenta</h5>
              <p className="text-blue-500 text-sm text-justify md:text-rigth">
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus
                lau
              </p>
            </div>
          </div>

          <button className="w-full md:w-auto bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
            Activar
          </button>
        </div>
      </div>

      {/* Conected */}

      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">Cuentas Conectadas</h1>
        <hr className="my-8 border-gray-500/30" />

        <div className="flex items-center justify-between bg-blue-500/20 p-4 rounded-lg border border-dashed border-blue-500 mb-8">
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center gap-2">
            <RiLinksLine className="text-8xl md:text-4xl text-blue-500" />
            <div className="">
            <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus
                lau.{" "}
                <span className="text-blue-500 hover:underline hover:cursor-pointer">
                  Learn More
                </span>
              </p>
            </div>
          </div>
        </div>

        <form action="" className="">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">
                  Google
                </h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-primary" : "bg-secondary-900"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">
                  Github
                </h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <Switch
                checked={enabledGit}
                onChange={setEnabledGit}
                className={`${enabledGit ? "bg-primary" : "bg-secondary-900"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabledGit ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <img
                src="https://pbs.twimg.com/tweet_video_thumb/DxIDCKUXQAAtE2-.jpg"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">
                  Slack
                </h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <Switch
                checked={enabledSlack}
                onChange={setenabledSlack}
                className={`${enabledSlack ? "bg-primary" : "bg-secondary-900"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${
                    enabledSlack ? "translate-x-9" : "translate-x-0"
                  }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>
        </form>
      </div>

      {/* Email preferences */}

      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">
          Notificaciones de Correo Eléctronico
        </h1>
        <hr className="my-8 border-gray-500/30" />

        <form action="" className="">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" />
              <div className="">
                <h5 className="text-gray-300">Successfull Payments</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" />
              <div className="">
                <h5 className="text-gray-300">Payouts</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" />
              <div className="">
                <h5 className="text-gray-300">Successfull Payments</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" />
              <div className="">
                <h5 className="text-gray-300">Customer Payments Dispute</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" />
              <div className="">
                <h5 className="text-gray-300">Refund Alert</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <input type="checkbox" className="accent-primary" />
              <div className="">
                <h5 className="text-gray-300">Invoice Payments</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Eliminar cuenta */}

      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">Desactivar Cuenta</h1>
        <hr className="my-8 border-gray-500/30" />

        <div className="flex items-center justify-between bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8">
          <div className="flex items-center gap-2">
            <RiErrorWarningLine className="text-4xl text-yellow-600" />
            <div className="">
              <h5 className="text-white text-xl">
                You Are Desactivating Your Account
              </h5>
              <p className="text-yellow-600 text-sm">
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus
                Lorem ipsum doamet consectetur, elit. Reiciendis ducimus lau{" "}
                <span className="text-yellow-400 hover:underline hover:cursor-pointer">
                  Learn More
                </span>
              </p>
            </div>
          </div>
        </div>

        <form action="" className="">
          <input type="checkbox" className="accent-primary" id="idnactive" />
          <label htmlFor="idInactive" className="pl-4 text-gray-500">
            I confirm my account desactivation
          </label>
        </form>

        <div className="flex justify-end">
          <button className="bg-red-500/60 text-gray-100 py-3 px-4 rounded-lg hover:bg-red-500/40 hover:text-gray-100 transition-colors">
            Desactivar cuenta
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
