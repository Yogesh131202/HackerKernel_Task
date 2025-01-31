const express = require('express');

const routerExport = express.Router();
const exportController = require('../controllers/exportController');

routerExport.get('/export', exportController.exportData);

module.exports = routerExport;
