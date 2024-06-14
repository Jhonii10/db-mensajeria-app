const { fetchStatistics, fetchOrderStatuses, fetchLatestService } = require("../models/servicios");


const getStatistics = async (req, res) => {
    try {
        const statistics = await fetchStatistics();
        res.json(statistics);
    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getOrderStatuses = async (req, res) => {
    try {
        const orderStatuses = await fetchOrderStatuses();
        res.json(orderStatuses);
    } catch (error) {
        console.error('Error fetching order statuses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getlatestService = async (req, res) => {
    try {
        const orderStatuses = await fetchLatestService();
        res.json(orderStatuses);
    } catch (error) {
        console.error('Error fetching order statuses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    getStatistics,
    getOrderStatuses,
    getlatestService
};
