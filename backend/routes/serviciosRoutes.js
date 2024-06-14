const { getStatistics } = require('../controllers/servicios');


const router = require('express').Router();


router.get('/statistics', getStatistics );

module.exports = router;