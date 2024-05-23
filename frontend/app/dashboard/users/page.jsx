import Search from '@/app/ui/components/search'
import CreateUser from '@/app/ui/dashboard/users/buttons'
import Table from '@/app/ui/dashboard/users/table'
import { quicksand } from '@/app/ui/font/quicksand'
import React from 'react'

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${quicksand.className} text-2xl`}>Usuarios</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder={'Buscar usuario...'}/>
        <CreateUser/>
      </div>
       <Table/>
      <div className="mt-5 flex w-full justify-center">
        {/* pagination */}
      </div>
    </div>
  )
}
