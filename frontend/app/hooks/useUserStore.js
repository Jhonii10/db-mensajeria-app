
import mensajeríaApi from '../api/mensajeriaApi';
import { unstable_noStore as noStore } from 'next/cache';
import actionUsers from '../lib/action';

 const useUserStore = ()=>{

     async function fetchUsers(query , currentPage) {
        noStore()
        const form = {query,currentPage}
        try {
        const {data} = await mensajeríaApi.post(`/auth/users`, form);
         return data;
        } catch (error) {
          console.error('Database Error:', error);
          throw new Error('No se pudieron recuperar los datos.');
        }
      }


      async function fetchUsersById(id) {
     
        noStore()
        
        try {
        
         const {data} = await mensajeríaApi.get(`/auth/edit/${id}`);
         return data;
        } catch (error) {
          console.error('Database Error:', error);
          throw new Error('No se pudieron recuperar los datos del usuario');
        }
      }


       async function updateUser(id,form) {
        noStore()
        try {
            await mensajeríaApi.put(`/auth/edit/${id}`, form);
            actionUsers("/dashboard/users")
            } catch (error) {
            return { message: 'Database Error: Failed to Update Invoice.' };
            }
            
        
      }

      
      async function deleteUser(id) {
        noStore()
        try {
            await mensajeríaApi.delete(`/auth/delete/${id}`);
            actionUsers("/dashboard/users")
            } catch (error) {
            return { message: 'Database Error: Failed to Update Invoice.' };
            }   
        
      }


    return{
        // metodos y propiedades
        fetchUsers,
        fetchUsersById,
        updateUser,
        deleteUser
    }
}

export default useUserStore;