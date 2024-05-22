import { BanknotesIcon, CheckCircleIcon, ClockIcon, InboxIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Quicksand } from 'next/font/google';
import React from 'react';

const quicksand = Quicksand({ subsets: ["latin"] });

const iconMap = {
    delivery: CheckCircleIcon,
    users: UserGroupIcon,
    pending: ClockIcon,
    service: InboxIcon,
  };

const Card = ({title, value,type,}) => {

    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${quicksand.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
}

export default Card;
