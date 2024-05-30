'use client'
import useUserStore from '@/app/hooks/useUserStore'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Notiflix from 'notiflix'
import React from 'react'
import toast from 'react-hot-toast'

export default function CreateUser() {
  return (
    <Link
      href="/dashboard/users/#create"
      className="flex h-10 items-center rounded-lg bg-black px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <span className="hidden md:block">Crear Usuario</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  )
}


export function UpdateUser({ id }) {
    return (
      <Link
        href={`/dashboard/users/edit/${id}`}
        className="rounded-md border p-2 hover:bg-green-100 text-green-600"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }
  

  export function DeleteUser({ id }) {

    const {deleteUser}=useUserStore()

    const confirmDelete = async()=>{
        Notiflix.Confirm.show(
            'Eliminar usuario',
            '¿Estas seguro de eliminar este usuario?',
            'Eliminar',
            'Cancelar',
            async function okCb() {
                await deleteUser(id);
                toast.success('Usuario eliminado')
            },
            function cancelCb() {
              return
            },
            {
              width: '320px',
              borderRadius: '8px',
              titleColor:'black',
              okButtonBackground:'red',
              cssAnimationStyle:'zoom',
      
            },
          );
      }
      
          
  return (   
        <button onClick={confirmDelete} className="rounded-md border p-2 hover:bg-red-100 text-red-600" >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
        </button> 
  );
}