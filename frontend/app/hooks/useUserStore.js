import mensajeríaApi from '../api/mensajeriaApi';
import { unstable_noStore as noStore } from 'next/cache';

 const useUserStore = ()=>{

     async function fetchUsers() {

        noStore()
        
        try {
        
         await new Promise((resolve) => setTimeout(resolve, 3000));
      
         const {data} = await mensajeríaApi.get('/auth');
         return data;
        } catch (error) {
          console.error('Database Error:', error);
          throw new Error('Failed to fetch revenue data.');
        }
      }


    return{
        // metodos y propiedades
        fetchUsers
    }
}

export default useUserStore;