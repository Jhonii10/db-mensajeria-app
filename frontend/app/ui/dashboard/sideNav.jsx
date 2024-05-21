'use client'
import UseAuthStore from '@/app/hooks/useAuthStore';
import { PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const SideNav = () => {

  const {startLogout} = UseAuthStore()

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-black p-4 md:h-40"
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            mensajeria
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          {/* navlinks */}
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          
            <button 
              className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3"
              onClick={startLogout}
              >
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Cerrar seccion</div>
            </button>
          
        </div>
      </div>
    );
}

export default SideNav;
