const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

const jwtVerify=require('../middleware/verifyjwt')
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 example: "1234567890"
 *               password:
 *                 type: string
 *                 example: "password"
 *             required:
 *               - phoneNumber
 *               - password
 *     responses:
 *       200:
 *         description: Successful authentication
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
 *                   example: "Success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "User logged in successfully"
 *       400:
 *         description: Unauthorized
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
 *                   example: "Invalid Phone Number or password"
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
 * /register:
 *   post:
 *     summary: Register user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "username"
 *               email:
 *                 type: string
 *                 example: "email@gmail.com"
 *               phoneNumber:
 *                 type: string
 *                 example: "1234567890"
 *               password:
 *                 type: string
 *                 example: "password"
 *               planName:
 *                 type: string
 *                 example: "plan 1"
 *     responses:
 *       200:
 *         description: Successful Registration
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
 *                   example: "User registered successfully"
 *       400:
 *         description: Unauthorized
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
 *                   example: "Invalid Phone Number or password"
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
 * /createuser:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "username"
 *               email:
 *                 type: string
 *                 example: "email@gmail.com"
 *               phoneNumber:
 *                 type: string
 *                 example: "1234567890"
 *               password:
 *                 type: string
 *                 example: "password"
 *               role:
 *                 type: string
 *                 example: "worker"
 *               tags:
 *                 type: string
 *                 example: "tag1"
 *               Latitude:
 *                 type: number
 *                 example: 0
 *               Longitude:
 *                 type: number
 *                 example: 0
 *     responses:
 *       200:
 *         description: Successful adding
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
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
 *                   example: "Invalid Phone Number or password"
 *       500:
 *         description: Internal server error
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
router.get('/displayusers',userControllers.handleDisplayUsers)
module.exports = router;