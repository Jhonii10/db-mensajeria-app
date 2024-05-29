
import useUserStore from '@/app/hooks/useUserStore';
import Breadcrumbs from '@/app/ui/components/breadcrumbs'
import EditForm from '@/app/ui/dashboard/users/editForm'
import React from 'react'

export  default async function  EditPage({params}) {

  const {fetchUsersById} = useUserStore();

  const user = await fetchUsersById(params.id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Usuarios', href: '/dashboard/users' },
          {
            label: 'editar usuario',
            href: `/dashboard/users/edit/${params.id}`,
            active: true,
          },
        ]}
      />
       <EditForm user={user}/>
    </main>
  )
}
