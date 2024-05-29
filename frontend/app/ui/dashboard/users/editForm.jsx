'use client'
import React, { useState } from 'react';
import Button from '../../components/button';
import { AtSymbolIcon, MapPinIcon, PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import useUserStore from '@/app/hooks/useUserStore';
import toast from 'react-hot-toast';



const EditForm = ({user}) => {

    const initialState = {
        name: user.name,
        email: user.email,
        address: user.address,
        cell_phone:user.cell_phone
    }

    const {updateUser} = useUserStore()
    

    const [form, setForm] = useState(initialState)
    const [pending, setPending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    const onSubmit =async (e)=>{
        e.preventDefault();
        setPending(true)
        try {
            await  updateUser(user.id_user, form);
            toast.success('Usuario actualizado con éxito');
            setPending(false)
        } catch (error) {
            setPending(false)
            toast.error(error.message)
        }
        
        
        
    }

    return (
        <form onSubmit={onSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Nombre
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user.name}
                onChange={handleChange}
                step="0.01"
                placeholder="ingrese su nombre"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div> 
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Correo electronico
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email}
                onChange={handleChange}
                step="0.01"
                placeholder="Ingrese su correo electronico"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div> 
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Direccion
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="address"
                name="address"
                type="text"
                defaultValue={user.address}
                onChange={handleChange}
                step="0.01"
                placeholder="Ingrese su direccion"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <MapPinIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div> 
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Numero de telefono
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="cell_phone"
                name="cell_phone"
                type="number"
                defaultValue={user.cell_phone}
                onChange={handleChange}
                step="0.01"
                placeholder="Ingrese su numero de telefono"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div> 
        </div>

       

        
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit" pending={pending}>Editar usuario</Button>
      </div>
    </form>
    );
}

export default EditForm;
