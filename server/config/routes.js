const {Router} = require('express');
const router = Router();

const {
    getAllCats,
    getNewCat,
    postNewCat,
    getCat,
    postDeletCat,
    getEditCat,
    postEditCat
} = require('../controllers/cats');

router.get('/', getAllCats);
router.get('/new_cat', getNewCat);
router.post('/', postNewCat);
router.get('/cat/:id', getCat);
router.post('/cat/destruir/:id', postDeletCat);
router.get('/cat/edit/:id', getEditCat);
router.post('/cat/:id', postEditCat);

module.exports = router;