const express = require('express');
const router = express.Router();

const internController= require("../controllers/internController")
const collegeController= require("../controllers/collegeController")
// const middlewareController=require("../middleware/mid")



router.post("/functionup/colleges", collegeController.createCollege) // College creation
router.post("/functionup/interns",internController.createIntern)   //Intern creation
router.get("/functionup/collegeDetails",collegeController.collegeDetails)   //get College




module.exports = router;