const { default: mensajeríaApi } = require("../api/mensajeriaApi");

const useClientStore = () => {

     async function fetchCustomers(query) {
        try {
          const {data} = await mensajeríaApi.get(`/clients?query=${query}`);
          return data;
        } catch (err) { 
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
      }

    return {
        fetchCustomers
    }
}

export default useClientStore;