const { default: mensajeríaApi } = require("../api/mensajeriaApi");

const useMensajeroStore = () => {

     async function fetchDelivery() {
        try {
          const {data} = await mensajeríaApi.get(`/delivery`);
          return data;
        } catch (err) { 
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
      }

    return {
      fetchDelivery
    }
}

export default useMensajeroStore;