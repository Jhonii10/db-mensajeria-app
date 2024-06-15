'use client'
import { ArrowRightIcon, AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { Quicksand } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../components/button';
import UseAuthStore from '@/app/hooks/useAuthStore';
import toast from 'react-hot-toast';

const quicksand = Quicksand({ subsets: ["latin"] });



function RegisterButton({pending}) {
    return (
      <Button className="mt-4 w-full" pending={pending}>
        Registrarse <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    );
  }

const RegisterForm = () => {

  const {errormessage, startRegister}= UseAuthStore();
  const [pending, setPending] = useState(false);

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Login: '',
    Password: '',
    PasswordConfirmation: '',
    Rol: '',
    Address: '',
    Cell_phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setPending(true);
    if (formData.Password !== formData.PasswordConfirmation) {
      toast.error('Las contraseñas no coinciden')
      setPending(false);
      return;
    }
    
    try {
      await startRegister({
        Name: formData.Name,
        Email: formData.Email,
        Login: formData.Login,
        Password: formData.Password,
        Rol: formData.Rol,
        Address: formData.Address,
        Cell_phone: formData.Cell_phone
      })
    } catch (error) {
      console.error(error)
    }finally{
      setPending(false);
    }

    
  };

  useEffect(() => {
    if (errormessage !== undefined) {
       toast.error(errormessage)
    }
}, [errormessage]);

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-4">
          
          <div className="mt-2 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre  
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              name="Login"
              value={formData.Login}
              onChange={handleInputChange}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Correo{" "}
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Direccion{" "}
            </label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
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
              name="Cell_phone"
              min={0}
              minLength={3}
              value={formData.Cell_phone}
              onChange={handleInputChange}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Rol
            </label>
            <select
                name="Rol"
                value={formData.Rol}
                onChange={handleInputChange}
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
                required
            >
                <option value="" disabled selected>
                Selecciona un rol
                </option>
                <option value="Delivery">Mensajero</option>
                <option value="Customer">Cliente</option>
            </select>
          </div>
           { formData.Rol &&
          (<>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              {" "}
              Identificacion{" "}
            </label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
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
              Cuidad{" "}
            </label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-2 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          </>)

        }
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
              name="Password"
              value={formData.Password}
              onChange={handleInputChange}
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
              name="PasswordConfirmation"
              value={formData.PasswordConfirmation}
              onChange={handleInputChange}
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
            <RegisterButton pending={pending}/>
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



  