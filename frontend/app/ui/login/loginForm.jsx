'use client'
import React, { useEffect, useState } from 'react';
import { Quicksand } from "next/font/google";
import {
    AtSymbolIcon,
    KeyIcon,
    ArrowRightIcon,
  } from '@heroicons/react/24/outline';
import Button from './button';
import Link from 'next/link';
import UseAuthStore from '@/app/hooks/useAuthStore';
import toast from 'react-hot-toast';

const quicksand = Quicksand({ subsets: ["latin"] });


function LoginButton() {
    return (
      <Button className="mt-4 w-full" >
        Acceder <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    );
  }

const LoginForm = () => {

    const {errormessage, startLogin}= UseAuthStore();

    const [formData, setFormData] = useState({
        username: '',
        contraseña: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        startLogin(formData)
        
    };


    useEffect(() => {
        if (errormessage !== undefined) {
            toast.error(errormessage)
        }
    }, [errormessage]);

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${quicksand.className} mb-3 text-2xl text-center font-bold`}>
            Iniciar sesión
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Usuario
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="username"
                placeholder="Introduce tu email o username"
                value={formData.username} 
                onChange={handleChange} 
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="contraseña"
                placeholder="Ingrese su contraseña"
                required
                value={formData.contraseña} 
                onChange={handleChange} 
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
          <LoginButton/>
          <p className="text-center text-sm text-gray-600 mt-4">
            {"¿No tienes una cuenta?"}
            <Link href="/register" className="font-semibold text-gray-800 ml-1">
            {" "}Registrate.
            </Link>
          </p>
        
      </div>
      
    </form>
    );
}

export default LoginForm;


