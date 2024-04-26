
const express = require('express');
const projectControllers = require('../controllers/projectControllers');
const router = express.Router();

const jwtVerify=require('../middleware/verifyjwt')

// router.use(jwtVerify)
router.post('/createproject',projectControllers.handleCreateProject)
router.post('/deleteproject',projectControllers.handleDeleteProject)
router.get('/displayprojects',projectControllers.handleDisplayProjects)
router.post('/updateproject',projectControllers.handleUpdateProject)



module.exports = router;