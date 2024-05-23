import { PlusIcon } from '@heroicons/react/24/outline'
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
