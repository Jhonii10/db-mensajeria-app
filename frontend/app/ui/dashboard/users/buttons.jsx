import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

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
          
  return (   
        <button className="rounded-md border p-2 hover:bg-red-100 text-red-600" >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
        </button> 
  );
}