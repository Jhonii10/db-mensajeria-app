import Card from '@/app/ui/dashboard/card';
import RevenueChart from '@/app/ui/dashboard/revenueChart';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ["latin"] });
 
export default async function Page() {


  return (
    <main>
      <h1 className={`${quicksand.className} mb-4 text-xl md:text-2xl`}>
        Panel
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
      <Card title="Entregados" value={124} type="delivery" /> 
        <Card title="Pendientes" value={10} type="pending" /> 
        <Card title="Total Servicios" value={134} type="service" /> 
        <Card
          title="Total Usuarios"
          value={100}
          type="users"
        /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
       {/* todo */}
       <RevenueChart/>
      </div>
    </main>
  );
}