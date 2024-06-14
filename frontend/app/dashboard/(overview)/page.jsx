import usefetchDataStore from '@/app/hooks/usefetchDataStore';
import useServiciosStore from '@/app/hooks/usefetchDataStore';
import Card from '@/app/ui/dashboard/card';
import LatestService from '@/app/ui/dashboard/latestService';
import RevenueChart from '@/app/ui/dashboard/revenueChart';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ["latin"] });
 
export default async function Page() {

  const {fetchCardData , fetchRevenueData , fetchlatestService} =  usefetchDataStore();

  const {total_services, total_users, total_pending_orders, total_delivered_orders} = await fetchCardData();

  const revenue = await fetchRevenueData();
  const latestService = await fetchlatestService();


  return (
    <main>
      <h1 className={`${quicksand.className} mb-4 text-xl md:text-2xl font-bold`}>
        Panel
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        <Card title="Entregados" value={total_delivered_orders ?? 0} type="delivery" /> 
        <Card title="Pendientes" value={total_pending_orders ?? 0} type="pending" /> 
        <Card title="Total Servicios" value={total_services ?? 0} type="service" /> 
        <Card
          title="Total Usuarios"
          value={total_users ?? 0}
          type="users"
        /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
       <RevenueChart revenue={revenue} />
       <LatestService latestService={latestService}/>
      </div>
    </main>
  );
}