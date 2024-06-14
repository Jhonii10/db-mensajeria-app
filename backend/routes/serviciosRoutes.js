const { getStatistics, getOrderStatuses, getlatestService } = require('../controllers/servicios');


const router = require('express').Router();


router.get('/statistics', getStatistics );
router.get('/order-statuses', getOrderStatuses );
router.get('/latest-service', getlatestService );

module.exports = router;