const router = require('express').Router();
const {registerController,loginController,updateKeyword,getUserController} = require('../controllers/userController');
const {loadDataController,getKeywordController,getKeywordsUserController} = require('../controllers/loadDataController');

router.post('/user/register',registerController);
router.post('/user/login',loginController);
router.post('/user/update',updateKeyword);
router.post('/user/getkeywords',getKeywordController)
router.post('/user/getuser',getUserController);
router.get('/user/getkeywordslist/:id',getKeywordsUserController);

router.get('/data',loadDataController)


module.exports.router = router;