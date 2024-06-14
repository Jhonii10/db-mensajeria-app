const { fetchStatistics } = require("../models/servicios");


const getStatistics = async (req, res) => {
    try {
        const statistics = await fetchStatistics();
        res.json(statistics);
    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getStatistics,
};
