import React from "react";
import { RiEdit2Line, RiShieldCheckLine, RiLinksLine } from "react-icons/ri";

function Profile() {
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

          <div className="flex items-center mb-8">
            <div className="w-1/4">
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

          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                Empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Nombre de la empresa"
              />
            </div>
          </div>

          {/* Phone */}

          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="tel"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Número de contacto"
              />
            </div>
          </div>

          {/* Pagina web */}

          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                Página web <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="tel"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Página web"
              />
            </div>
          </div>

          {/* País */}

          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
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

          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p className="">
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
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
          <div className="flex items-center justify-between mb-8">
            <div className="">
              <h5 className="text-gray-100 text-xl">Correo eléctronico</h5>
              <p className="text-gray-500 text-sm">yvonneMuller@gmail.com</p>
            </div>
            <div className="">
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar Email
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="">
              <h5 className="text-gray-100 text-xl">Contraseña</h5>
              <p className="text-gray-500 text-sm">************</p>
            </div>
            <div className="">
              <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-between bg-blue-500/20 p-4 rounded-lg border border-dashed border-blue-500 mb-8">
          <div className="flex items-center gap-2">
            <RiShieldCheckLine className="text-4xl text-blue-500" />
            <div className="">
              <h5 className="text-blue-500 text-xl">Asegure su Cuenta</h5>
              <p className="text-blue-500 text-sm">
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus
                lau
              </p>
            </div>
          </div>
          <div className="">
            <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
              Resetar contraseña
            </button>
          </div>
        </div>
      </div>

      {/* Conected */}

      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">Cuentas Conectadas</h1>
        <hr className="my-8 border-gray-500/30" />

        <div className="flex items-center justify-between bg-blue-500/20 p-4 rounded-lg border border-dashed border-blue-500 mb-8">
          <div className="flex items-center gap-2">
            <RiLinksLine className="text-4xl text-blue-500" />
            <div className="">
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus lau. <span className="text-blue-500 hover:underline hover:cursor-pointer">Learn More</span>
              </p>
            </div>
          </div>
        </div>

        <form action="" className="">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">Google</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">Github</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="https://pbs.twimg.com/tweet_video_thumb/DxIDCKUXQAAtE2-.jpg"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">Slack</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>
        </form>
      </div>

       {/* Conected */}

       <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-2xl text-gray-100">Cuentas Conectadas</h1>
        <hr className="my-8 border-gray-500/30" />

        <div className="flex items-center justify-between bg-blue-500/20 p-4 rounded-lg border border-dashed border-blue-500 mb-8">
          <div className="flex items-center gap-2">
            <RiLinksLine className="text-4xl text-blue-500" />
            <div className="">
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus Lorem ipsum dolor sit amet consectetur, elit. Reiciendis ducimus lau. <span className="text-blue-500 hover:underline hover:cursor-pointer">Learn More</span>
              </p>
            </div>
          </div>
        </div>

        <form action="" className="">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">Google</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">Github</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <img
                src="https://pbs.twimg.com/tweet_video_thumb/DxIDCKUXQAAtE2-.jpg"
                alt=""
                className="w-10 h-10 object-cover"
              />
              <div className="">
                <h5 className="text-gray-100 hover:text-blue-500 text-xl transition-colors hover:cursor-pointer font-medium">Slack</h5>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur, elit. Reiciendis
                  ducimus lau
                </p>
              </div>
            </div>
            <div className="">
              <button className="bg-blue-500/40 py-3 px-4 rounded-lg hover:bg-blue-500/30 hover:text-gray-100 transition-colors">
                Resetar contraseña
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
