const { default: mensajeríaApi } = require("../api/mensajeriaApi");

const useServiciosStore = () => {

     async function fetchCardData() {
        try {
          const {data} = await mensajeríaApi.get(`/services/statistics`);
          return data;
        } catch (err) { 
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
      }
     
    return {
         fetchCardData
    }
}

export default useServiciosStore;