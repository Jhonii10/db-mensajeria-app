import useClientStore from "@/app/hooks/useClientStore";
import Search from "@/app/ui/components/search";
import CustomersTable from "@/app/ui/dashboard/customer/table";
import { quicksand } from "@/app/ui/font/quicksand";



export default async function Page({searchParams}) {

  const {fetchCustomers} = useClientStore()

  const query = searchParams?.query || '';
  const customers = await fetchCustomers(query);

  return (
    <main>
       <h1 className={`${quicksand.className} mb-8 text-xl md:text-2xl font-bold`}>
        Clientes
      </h1>
      <Search placeholder="Buscar cliente..." />
      <CustomersTable customers={customers} />
    </main>
  );
}