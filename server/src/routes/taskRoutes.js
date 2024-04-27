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
 *     summary: Create a task for a project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               taskName:
 *                 type: string
 *                 example: "Task 1"
 *               taskDescription:
 *                 type: string
 *                 example: "Task 1 description"
 *               taskParentProject:
 *                 type: string
 *                 example: "5f1515a"
 *               taskManager:
 *                 type: string
 *                 example: "5f1515a"
 *               taskNeededworkers:
 *                 type: number
 *                 example: 2
 *               tasktags:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: ["tag1", "tag2"]
 *               taskpriority:
 *                 type: string
 *                 enum: ["low", "medium", "high"]
 *                 example: "low"
 *               taskStatus:
 *                 type: string
 *                 enum: ["pending", "on progress", "completed"]
 *                 example: "pending"
 *               taskLatitude:
 *                 type: number
 *                 example: 0
 *               taskLongitude:
 *                 type: number
 *                 example: 0
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Task created successfully"
 *       401:
 *         description: Unauthorized. Authentication required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
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

/**
 * @swagger
 * /autoassigntask:
 *   post:
 *     summary: Assign a task to a project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               workersSize:
 *                 type: number
 *                 example: 2
 *               taskName:
 *                 type: string
 *                 example: "Task 9"
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "662caa576feec61007e5048a"
 *                   distance:
 *                     type: number
 *                     format: float
 *                     example: 667.1695598673524
 *                 required:
 *                   - id
 *                   - distance
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Couldn't assign task to workers"
 *       401:
 *         description: Unauthorized. Authentication required.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 401
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
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