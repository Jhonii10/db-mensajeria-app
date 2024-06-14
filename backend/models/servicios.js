const pool = require("../database/config")

const fetchStatistics = async () => {
    const totalServicesQuery = 'SELECT COUNT(*) FROM service';
    const totalUsersQuery = `SELECT COUNT(*) FROM users WHERE rol != 'Manager'`;
    const totalPendingOrdersQuery = `SELECT COUNT(*) 
                                     FROM status 
                                     WHERE type_status = 'Required'`;
    const totalDeliveredOrdersQuery = `SELECT COUNT(*) 
                                       FROM status 
                                       WHERE type_status = 'Delivered'`;

    const [totalServicesResult, totalUsersResult, totalPendingOrdersResult, totalDeliveredOrdersResult] = await Promise.all([
        pool.query(totalServicesQuery),
        pool.query(totalUsersQuery),
        pool.query(totalPendingOrdersQuery),
        pool.query(totalDeliveredOrdersQuery)
    ]);

    return {
        total_services: totalServicesResult.rows[0].count ?? 0,
        total_users: totalUsersResult.rows[0].count ?? 0,
        total_pending_orders: totalPendingOrdersResult.rows[0].count ?? 0,
        total_delivered_orders: totalDeliveredOrdersResult.rows[0].count ?? 0,
    }
};

module.exports = {
    fetchStatistics,
};