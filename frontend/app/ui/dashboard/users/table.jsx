import React from 'react';
import { DeleteUser, UpdateUser } from './buttons';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import useUserStore from '@/app/hooks/useUserStore';


const Table =async ({query,currentPage}) => {

    const {fetchUsers} =  useUserStore()

    const users = await fetchUsers(query,currentPage) ?? [];
    
    console.log(users);

    if (!users || users.length == 0) {
        return(
            <div className="mt-6 flow-root"> 
            <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg  p-2 md:pt-0 ">
         <div className='flex justify-center items-center gap-2' style={{height: 'calc(100vh - 280px)'}}>
         <h2 className="text-xl font-semibold">No se encontraron datos </h2>
         <FaceFrownIcon className="w-10 text-gray-400" />
         </div>
        </div>
        </div>
        </div>
        )
    }
    return (
        <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user) => (
              <div
                key={user.id_user}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{user.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <p>{user.cell_phone}</p>
                </div>
               
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{user.rol}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user.id_user} />
                    <DeleteUser id={user.id_user} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-bold ">
              <tr className=''>
                <th scope="col" className="px-4 py-5 font- sm:pl-6">
                  Nombre 
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Correo
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Rol
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Telefono
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Direccion
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id_user}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg "
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3 ">
                    <div className="flex items-center gap-3">
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.rol}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.cell_phone}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                  {user.address}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={user.id_user} />
                      <DeleteUser id={user.id_user} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
}

export default Table;
