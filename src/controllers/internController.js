const internModel = require("../models/internModel")
const collegeModel = require("../models/collegeModel")
// const validator = require("email-validator");

const moment = require('moment');



const createInternData = async function (req, res) {
    try {
        let internData = req.body
        const { name, mobile, email, collegeName } = internData;


        if (!name) { return res.status(400).send({ status: false, message: "name is required" }) }

        if (!email) { return res.status(400).send({ status: false, message: "email is required" }) }

        if (!collegeName) { return res.status(400).send({ status: false, message: "collegeName is required" }) }

        if (!mobile) { return res.status(400).send({ status: false, message: " mobile number is required" }) }


        if (typeof(name)!== "string" || internData.name.trim().length == 0) { return res.status(400).send({ status: false, message: "name is not valid" }) }

       
        let pattern1 =/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
        if (!pattern1.test( email)) {
          return res.status(400).send({ status: false, msg: "Invalid Email" });
        }
    
        let check=/^[6-9]\d{9}$/
        if(!check.test( mobile)){ return res.status(400).send({ status: false, message: "mobile number is not valid" }) }

        if (collegeName) {
          const findCollege = await collegeModel.findOne({ name: collegeName , isDeleted:false });
          if (!findCollege) {return res.status(404).send({ status: false, msg: "College Not Found" }) }
          

          internData.collegeId = findCollege._id;
          const internCreated = await internModel.create(internData);
          return res.status(201).send({ status: true, data: internCreated });

        }
      } catch (err) {
        res.status(500).send({ status: false, msg: err.message });
      }
    };


module.exports.createInternData= createInternData




