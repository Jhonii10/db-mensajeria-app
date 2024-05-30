'use client'
import React from 'react';
import {
    UserGroupIcon,
    HomeIcon,
    UsersIcon,
    TruckIcon,
  } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { 
      name: 'Inicio',
      href: '/dashboard',
      icon: HomeIcon
    },
    {
      name: 'Usuarios',
      href: '/dashboard/users',
      icon: UsersIcon,
    },
    { 
      name: 'Clientes',
      href: '/dashboard/customers',
      icon: UserGroupIcon
    },
    { 
        name: 'Servicios',
        href: '/dashboard/services',
        icon: TruckIcon
    },
  ];


const NavLinks = () => {

    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-gray-200 text-black font-bold': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
}

export default NavLinks;
