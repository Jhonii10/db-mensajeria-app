import useMensajeroStore from "@/app/hooks/useMensajeroStore";
import Search from "@/app/ui/components/search";
import DeliverysTable from "@/app/ui/dashboard/delivery/table";
import { quicksand } from "@/app/ui/font/quicksand";


export default async function Page({searchParams}) {

    const {fetchDelivery} = useMensajeroStore()
    const query = searchParams?.query || '';
    const deliverys = await fetchDelivery();

    return (
        <main>
            <h1 className={`${quicksand.className} mb-8 text-xl md:text-2xl font-bold`}>
                Mensajeros
            </h1>
            <Search placeholder="Buscar Mensajero..." />
            <DeliverysTable deliverys={deliverys} />
        </main>
    )
}