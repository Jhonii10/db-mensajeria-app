import Search from '@/app/ui/components/search'
import CreateUser from '@/app/ui/dashboard/users/buttons'
import Table from '@/app/ui/dashboard/users/table'
import { quicksand } from '@/app/ui/font/quicksand'
import React from 'react'

export const revalidate = 0;

export default function Page({searchParams}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${quicksand.className} text-2xl font-bold`}>Usuarios</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder={'Buscar usuario...'}/>
      </div>
       <Table query={query} currentPage={currentPage}/>
      <div className="mt-5 flex w-full justify-center">
        {/* pagination */}
      </div>
    </div>
  )
}
