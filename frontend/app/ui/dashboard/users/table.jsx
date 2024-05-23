import React from 'react';
import { DeleteUser, UpdateUser } from './buttons';



const Table = () => {
    const users = [
       
        {
            "id": 2,
            "name": "nathalia",
            "contraseña": "$2b$10$OTz5HILRF27nWUm7qbYTyOU6fm0wLrH0MkM3K0P5CyXHiOFTLnVOm",
            "email": "nathalia10@gmail.com",
            "celular": "313432453",
            "direccion": "cra 16 #10-140",
            "rolle": "cliente"
        },
        
    ];
    return (
        <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{user.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <p>estado</p>
                </div>
               
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {'Fechas'}
                    </p>
                    <p>{'23-05-2024'}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user.id} />
                    <DeleteUser id={user.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre 
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Correo
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Role
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Telefono
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estado
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.rolle}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.celular}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    estado
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={user.id} />
                      <DeleteUser id={user.id} />
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
