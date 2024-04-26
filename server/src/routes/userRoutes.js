const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

const jwtVerify=require('../middleware/verifyjwt')


router.post('/login',userControllers.handleLogin)
router.post('/register',userControllers.handleRegister)


router.use(jwtVerify)
router.post('/createuser',userControllers.handleCreateUser)
router.post('/deleteuser',userControllers.handleDeleteUser)
router.post('/displayusers',userControllers.handleDisplayUsers)
module.exports = router;