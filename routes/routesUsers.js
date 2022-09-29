const {Router} = require('express');
const { getUsers, getForm, saveUsers, putFormUsers, deleteUser } = require('../controllersUsers/controllerUsers.js');

const router = Router()

router.get("/lista", getUsers)
router.get("/form", getForm)
router.post("/form", saveUsers)
router.get("/edit/:id", putFormUsers)
router.get("/delete/:id", deleteUser)

module.exports = router