import React from 'react';
import { quicksand } from '../font/quicksand';
import clsx from 'clsx';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const LatestService = ({latestService = []}) => {
    return (
        <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${quicksand.className} mb-4 text-xl md:text-2xl font-semibold`}>
        Ultimos servicios
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        
        {
            !latestService || latestService.length >= 1 
            ? <div className="bg-white px-6">
        
        {latestService?.map((service, i) => {
          return (
            <div
              key={service.id}
              className={clsx(
                'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {service.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {service.email}
                  </p>
                </div>
              </div>
              <p
                className={`${quicksand.className} truncate text-sm font-medium md:text-base`}
              >
                {service.amount}
              </p>
            </div>
          );
        })}
      </div>
      : <p className="mt-4 text-gray-400">Datos no disponibles</p>
        }
        
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Actualizado justo ahora</h3>
        </div>
      </div>
    </div>
    );
}

export default LatestService;
