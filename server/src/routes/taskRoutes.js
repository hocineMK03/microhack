const express = require('express');
const taskControllers = require('../controllers/taskControllers');
const router = express.Router();

const jwtVerify=require('../middleware/verifyjwt')
router.get('/displaytaskbyid',taskControllers.handleDisplayTasksByID)
router.use(jwtVerify)
router.post('/createtask',taskControllers.handleCreateTask)
router.post('/displaytask',taskControllers.handleDisplayTasks)
router.post('/deletetask',taskControllers.handleDeleteTask)
router.post('/assigntask',taskControllers.handleAssignTask)

module.exports=router