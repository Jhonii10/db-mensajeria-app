'use client'
import React, { useEffect, useState } from 'react';
import {
    UserGroupIcon,
    HomeIcon,
    UsersIcon,
    TruckIcon,
    IdentificationIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

const links = [
    { 
        name: 'Inicio',
        href: '/dashboard',
        icon: HomeIcon,
        roles: ['Manager', 'Customer', 'Delivery']
    },
    {
        name: 'Usuarios',
        href: '/dashboard/users',
        icon: UsersIcon,
        roles: ['Manager']
    },
    { 
        name: 'Clientes',
        href: '/dashboard/customers',
        icon: UserGroupIcon,
        roles: ['Manager']
    },
    { 
      name: 'Mensajeros',
      href: '/dashboard/delivery',
      icon: IdentificationIcon,
      roles: ['Manager']
  },
    { 
        name: 'Servicios',
        href: '/dashboard/services',
        icon: TruckIcon,
        roles: ['Manager', 'Customer', 'Delivery']
    },
];

const NavLinks = () => {
    const pathname = usePathname();
    const [role, setRole] = useState('');

    useEffect(() => {
        const userRole = Cookies.get('data');
        setRole(userRole);
    }, []);

    return (
        <>
            {links
                .filter(link => link.roles.includes(role))
                .map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-zinc-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-zinc-200 text-black ': pathname === link.href,
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