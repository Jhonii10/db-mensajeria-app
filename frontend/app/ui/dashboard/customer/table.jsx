

import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Search from '../../components/search';

export default async function CustomersTable({customers=[]}) {

    if (!customers || customers.length == 0) {
        return(
            <div className="mt-6 flow-root"> 
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg  p-2 md:pt-0 ">
                        <div className='flex justify-center items-center gap-2' style={{height: 'calc(100vh - 280px)'}}>
                            <h2 className="text-xl font-semibold">No se encontraron clientes </h2>
                            <FaceFrownIcon className="w-10 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="w-full">
      
      
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_services}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                      Nombre
                    </th>
                    <th scope="col" className="px-3 py-5 font-bold">
                      Correo
                    </th>
                    <th scope="col" className="px-3 py-5 font-bold text-center">
                      Total Servicios
                    </th>
                    <th scope="col" className="px-3 py-5 font-bold text-center">
                      Total Pendientes
                    </th>
                    <th scope="col" className="px-4 py-5 font-bold text-center">
                      Total Recogidos
                    </th>
                    <th scope="col" className="px-4 py-5 font-bold text-center">
                      Total Entregados
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-center">
                        {customer.total_services}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-center">
                        {customer.total_required}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm text-center">
                        {customer.total_pickedup}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md text-center">
                        {customer.total_delivered}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}