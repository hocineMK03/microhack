
const express = require('express');
const projectControllers = require('../controllers/projectControllers');
const router = express.Router();

const jwtVerify=require('../middleware/verifyjwt')
/**
 * @swagger
 * /displayprojects:
 *   get:
 *     summary: Display projects
 *     responses:
 *       200:
 *         description: Successful operation. Returns a list of projects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *             examples:
 *               mockData:
 *                 value: 
 *                   - _id: 1f1515a
 *                      projectpriority:low
 *                      projectStatus:pending
 *                      projectName:project 1
 *                      projectDescription:project description
 *                   - _id: 1f1515a
 *                      projectpriority:low
 *                      projectStatus:pending
 *                      projectName:project 1
 *                      projectDescription:project description
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /createprojects:
 *   get:
 *     summary: create projects
 *     responses:
 *       200:
 *         description: Successful operation. Returns a an object rerpresentation of a projects.
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /deleteproject:
 *   get:
 *     summary: delete a project
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
 * /updateproject:
 *   get:
 *     summary: update a project
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized. Authentication required.
 *       500:
 *         description: Internal server error.
 */
router.get('/displayprojects',projectControllers.handleDisplayProjects)
router.use(jwtVerify)
router.post('/createproject',projectControllers.handleCreateProject)
router.post('/deleteproject',projectControllers.handleDeleteProject)

router.post('/updateproject',projectControllers.handleUpdateProject)



module.exports = router;