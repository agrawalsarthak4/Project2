const mongoose = require('mongoose');

     
    const internSchema = new mongoose.Schema( {
        name:  {type:String, required:" name is required",trim:true},
        email:  {type:String, required:"Email is required",trim:true,lowercase:true,
         validate:{
                validator:function(v){
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message:"Please enter a valid email"
        } 
        ,unique:true},
        mobile: {type:Number, required:"Mobile No. is required" ,trim:true,
         validate:{
            validator:function(v){
                return /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(v);
            },
            message:"Please enter a valid mobile"

        }, unique:true },
        collegeId: {type:mongoose.Schema.Types.ObjectId,ref:"College",required:"College id is required" },
       isDeleted: {type:Boolean, default: false}},

{timestamps: true });




module.exports = mongoose.model('Intern', internSchema) 


