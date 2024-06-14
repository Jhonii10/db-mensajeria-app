const { default: mensajeríaApi } = require("../api/mensajeriaApi");

const usefetchDataStore = () => {

     async function fetchCardData() {
        try {
          const {data} = await mensajeríaApi.get(`/services/statistics`);
          return data;
        } catch (err) { 
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
      }

      async function fetchRevenueData() {
        try {
          const {data} = await mensajeríaApi.get(`/services/order-statuses`);
          return data;
        } catch (err) { 
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
      }

      async function fetchlatestService() {
        try {
          const {data} = await mensajeríaApi.get(`/services/latest-service`);
          return data;
        } catch (err) { 
          console.error('Database Error:', err);
          throw new Error('Failed to fetch all customers.');
        }
      }
     
    return {
         fetchCardData,
         fetchRevenueData,
         fetchlatestService
    }
}

export default usefetchDataStore;