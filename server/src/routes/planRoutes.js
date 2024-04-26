const express = require('express');
const planControllers = require('../controllers/planControllers');
const router = express.Router();


router.post('/createplan',planControllers.handleCreatePlan)


module.exports=router