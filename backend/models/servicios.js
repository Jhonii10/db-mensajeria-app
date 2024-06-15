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

const fetchOrderStatuses = async () => {
    const statusesQuery = `
        SELECT 
        type_status 
        FROM status 
        WHERE type_status IN ('Delivered','Pickedup','Required')
    `;
    
    const result = await pool.query(statusesQuery);
    return result.rows;
};

const fetchLatestService = async () => {
    const statusesQuery = `
    SELECT
    s.ID_Service,
    s.Service_Code,
    s.Date,
    s.Origin,
    s.Destination,
    s.Number_of_Packages,
    s.Type_of_Transport,
    s.Description,
    s.City,
    u.Name,
    u.Email
    FROM
        service s
    JOIN
        customer c ON s.ID_Customer = c.ID_Customer
    JOIN
        users u ON c.ID_User = u.ID_User
    ORDER BY
        s.ID_Service DESC
    LIMIT 5;

    `;
    
    const result = await pool.query(statusesQuery);
    return result.rows;
};

module.exports = {
    fetchStatistics,
    fetchOrderStatuses,
    fetchLatestService
    
};