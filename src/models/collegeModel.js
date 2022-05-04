const mongoose = require('mongoose');
const url = require('url')
const needle = require('needle')
const fs = require('fs')


    const collegeSchema = new mongoose.Schema( {

     name: {type:String,required:"College Name  is required",trim:true}, 
     fullName: {type:String,required:"Full Name  is required",trim:true}, 
     logoLink: {type:String,required:"LogoLink  is required"},
    //  logoLink: "https://functionup.s3.ap-south-1.amazonaws.com/colleges/iith.png" ,
    
     // validator:function(v)  {
    //     return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(v);
    // },
     isDeleted: {type:Boolean, default: false} ,



}, { timestamps: true });

// no callback, using streams






module.exports = mongoose.model('College', collegeSchema) 



