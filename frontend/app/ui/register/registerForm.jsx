import { ArrowRightIcon, AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Quicksand } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import Button from '../login/button';
const quicksand = Quicksand({ subsets: ["latin"] });

function RegisterButton() {
    return (
      <Button className="mt-4 w-full" >
        Registrarse <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    );
  }

const RegisterForm = () => {
    return (
        <form  className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-4">
          <h1 className={`${quicksand.className} mb-3 text-2xl text-center font-bold`}>
              registrarse
          </h1>
          <div className="mt-2 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="identificacion"
              className="block text-sm font-medium text-gray-700"
            >
              Identificacion
            </label>
            <input
              type="number"
              id="identificacion"
              name="identificacion"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Correo{" "}
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Telefono{" "}
            </label>
            <input
              type="number"
              id="Telefono"
              name="Telefono"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Rol
            </label>
            <select
                id="role"
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
                required
            >
                <option value="" disabled="" selected="">
                Selecciona un rol
                </option>
                <option value="mensajero">Mensajero</option>
                <option value="cliente">Cliente</option>
            </select>
          </div>


          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Contraseña{" "}
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmacion de contraseña
            </label>
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                required
              />
              <span className="text-sm text-gray-700">
                Acepto los terminos y condiciones

              </span>
            </label>
          </div>
          
        </div>
            <RegisterButton/>
            <p className="text-center text-sm text-gray-600 mt-4">
              {"¿Ya tienes una cuenta?"}
              <Link href="/login" className="font-semibold text-gray-800 ml-1">
              {" "}Inicia seccion.
              </Link>
            </p>
          
        </div>
        
      </form>
    );
}

export default RegisterForm;



  