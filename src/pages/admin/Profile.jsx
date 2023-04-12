import React from "react";
import { RiEdit2Line } from "react-icons/ri";

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
                    <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">Cambiar Email</button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-gray-100 text-xl">Contraseña</h5>
                    <p className="text-gray-500 text-sm">************</p>
                </div>
                <div className="">
                    <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">Resetar contraseña</button>
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
        


    </>
  );
}

export default Profile;
