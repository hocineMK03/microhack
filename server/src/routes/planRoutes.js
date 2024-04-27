const express = require('express');
const planControllers = require('../controllers/planControllers');
const router = express.Router();

/**
 * @swagger
 * /createplan:
 *   post:
 *     summary: create a plan
 *     responses:
 *       200:
 *         description: Successful adding
 *       400:
 *         description: bad request
 *       500:
 *          internal error
 */
router.post('/createplan',planControllers.handleCreatePlan)


module.exports=router