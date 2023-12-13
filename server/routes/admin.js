var express = require("express");
var router = express.Router();
var jwt = require ('../middleware/adminjwt')


 const adminController = require('../controller/adminController');
// const registerlistcontroller = require('../controlleradmin/registerlistcontroller')
// const adminlogincontroller=require('../controlleradmin/adminlogincontroller')
// const adminchangepassword=require('../controlleradmin/adminpasswordchange')
// const adminchangepattern=require('../controlleradmin/adminpatterncontroller')
// const adminforgoatpassword=require('../controlleradmin/forgotpassword')


// router.post("/contents", adminController.contents);
// router.get("/getContents", adminController.getContents);
// router.get("/getContent/:id", adminController.getContent);
// router.get ("/getsingleuser/:id", adminController.getsingleuser)
// router.post("/updatecontent/:id", adminController.updatecontent);
// router.get('/registerSingledata/:id', adminController.registerSingledata);


router.post('/adminlogin',adminController.handleAdminlogin);
router.post('/twoFactorGetCode',adminController.generateTwoFactorCode)
router.post('/twoFactorVerify',adminController.loginTwoFactorVerify)
router.post('/disableTwoFactor',adminController.disableTwoFactorAuthentication)
//router.get('/registerlist',jwt.authorization,adminController.handleregisterlist);
router.post('/changepassword',jwt.authorization,adminController.adminpasswordchange)
router.post('/oldPattern',adminController.handleOldPattern)
router.post('/newPattern',adminController.updatePattern)
router.post('/verifyEmail',adminController.verifyEmail)
router.post('loginTwoFactorVerify',adminController.adminLoginTwoFactorVerify)
router.post('/setpassword',adminController.setpassword)
router.post('/setpattern',adminController.setpattern)








router.post('/kycList', adminController.kycList)
router.get("/singleKycData/:id", adminController.singleKycData )
router.post('/KycApprove', adminController.KycApprove)
router.post('/KycReject', adminController.KycReject)


module.exports = router;