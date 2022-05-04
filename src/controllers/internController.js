const mongoose=require("mongoose")
const internModel = require("../models/internModel")
const collegeModel=require("../models/collegeModel")
const isValid=function(value){
    if(typeof value==="undefined" || value===null)return false 
    if(typeof value==="string" && value.trim().length===0)return false 
    return true
}
const isValidRequestBody=function(body){
    return Object.keys(body).length>0 
}
const isValidObjectId=function(objectId){
    return mongoose.Types.ObjectId.isValid(objectId)
}





const createIntern = async function (req, res) {
    try {
        let reqbody = req.body 
        
        if(!isValidRequestBody(reqbody)){
            return res.status(400).send({status:false,message:"Invalid request parameters please provide intern details"})
        }
    
    const {name ,email,collegeId,mobile,isDeleted}=req.body 
    if(!isValid(name)){
        return res.status(400).send({status:false,message:"name is required"})

    }
    if(!isValid(email)){
        return res.status(400).send({status:false,message:"email  is required"})

    }
    if(!isValidObjectId(collegeId)){
        return res.status(400).send({status:false,message:"CollegeId is required"})

    }
    if(!isValid(mobile)){
        return res.status(400).send({status:true,messgae:"Please provide valid mobile No."})
    }
    
    const intern=await internModel.create(reqbody)
    return res.status(201).send({status:true,message:"created successfully",data:intern})
        
}
    catch (err) {
        
        return res.status(500).send({ status:false, error: err.message })
    }
}







module.exports.createIntern = createIntern
// module.exports.getBlogs=getBlogs
// module.exports.updateBlogs=updateBlogs
// module.exports.deleteId=deleteId
// module.exports.deleteByQuery=deleteByQuery
