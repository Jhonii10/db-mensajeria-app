import CustomersTable from "@/app/ui/dashboard/customer/table";
import { quicksand } from "@/app/ui/font/quicksand";



export default async function Page({searchParams}) {

  const query = searchParams?.query || '';
  const customers = [];

  return (
    <main>
      <h1 className={`${quicksand.className} mb-8 text-xl md:text-2xl font-bold`}>
          Clientes
      </h1>
      <CustomersTable customers={customers} />
    </main>
  );
}