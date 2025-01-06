const mongoose = require('mongoose');


const infoSchema = mongoose.Schema(
    {
        exam:{type:String, required:'exam name is required'},
        low:{type:Number, required:'low is required'},
        high:{type:Number, required:'high is required'},
    });

module.exports = mongoose.model('Info',infoSchema);