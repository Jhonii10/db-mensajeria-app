
import { quicksand } from '@/app/ui/font/quicksand'
import Link from 'next/link'

import React from 'react'

export default function Page() {
  return (
    <main>
      <h1 className={`${quicksand.className} mb-8 text-xl md:text-2xl font-bold`}>
          Servicios
      </h1>

      <div className="flex  space-x-4">
          <Link href="/dashboard/services#/branch">
            <h2 className="px-4 py-2 bg-blue-500 text-white rounded-lg">Crear sucursal</h2>
          </Link>
          <Link href="/dashboard/services#/branch">
            <h2 className="px-4 py-2 bg-blue-500 text-white rounded-lg">Ver sucursales</h2>
          </Link>
          <Link href="/dashboard/services#/create">
            <h2 className="px-4 py-2 bg-green-500 text-white rounded-lg">Crear Servicio</h2>
          </Link>
          <Link href="/dashboard/services#/create">
            <h2 className="px-4 py-2 bg-green-500 text-white rounded-lg">Ver Servicios</h2>
          </Link>
        </div>
    </main>
  )
}
