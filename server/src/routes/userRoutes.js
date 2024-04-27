const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

const jwtVerify=require('../middleware/verifyjwt')

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     responses:
 *       200:
 *         description: Successful authentication
 *       400:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register user
 *     responses:
 *       200:
 *         description: Successful Registration
 *       400:
 *         description: Unauthorized
 */
/**
 * @swagger
 * /createuser:
 *   post:
 *     summary: create user
 *     responses:
 *       200:
 *         description: Successful adding
 *       400:
 *         description: bad request
 */
/**
 * @swagger
 * /deleteuser:
 *   post:
 *     summary: delete user
 *     responses:
 *       200:
 *         description: Successful delelting
 *       400:
 *         description: bad request
 */
/**
 * @swagger
 * /displayusers:
 *   post:
 *     summary: display user
 *     responses:
 *       200:
 *         description: result data
 *       400:
 *         description: bad request
 */
router.post('/login',userControllers.handleLogin)
router.post('/register',userControllers.handleRegister)


router.use(jwtVerify)
router.post('/createuser',userControllers.handleCreateUser)
router.post('/deleteuser',userControllers.handleDeleteUser)
router.post('/displayusers',userControllers.handleDisplayUsers)
module.exports = router;