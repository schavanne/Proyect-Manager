const express = require('express');
const router = express.Router();

const { store, list, detail, update, remove, addCollaborator, removeCollaborator } = require('../controllers/proyectController')

router
    .route('/')
        .get(list)
        .post(store)
router
    .route('/:id')
        .get(detail)
        .put(update)
        .delete(remove)
router
    .get('/collaborator/add',addCollaborator)
    .delete('/collaborator/remove',removeCollaborator)

module.exports = router;