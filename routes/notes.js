const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');


// All routes start with /notes/...

router.post('/create', notesCtrl.create);

router.get('/index', notesCtrl.index);

router.put('/edit', notesCtrl.edit);

router.post('/delete', notesCtrl.deleteNote);


module.exports = router;