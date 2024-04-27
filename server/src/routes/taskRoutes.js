const express = require('express');
const taskControllers = require('../controllers/taskControllers');
const router = express.Router();
/**
 * @swagger
 * /displaytaskbyid:
 *   get:
 *     summary: get a task a project
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /createtask:
 *   post:
 *     summary: get a task a project
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */



/**
 * @swagger
 * /displaytask:
 *   post:
 *     summary: get tasks 
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /deletetask:
 *   post:
 *     summary: delete a task a project
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /assigntask:
 *   post:
 *     summary: assign a task a project
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */
const jwtVerify=require('../middleware/verifyjwt')
router.get('/displaytaskbyid',taskControllers.handleDisplayTasksByID)
router.use(jwtVerify)
router.post('/createtask',taskControllers.handleCreateTask)
router.post('/displaytask',taskControllers.handleDisplayTasks)
router.post('/deletetask',taskControllers.handleDeleteTask)
router.post('/assigntask',taskControllers.handleAssignTask)


router.post('/autoassigntask',taskControllers.handleAutoAssignTask)
module.exports=router