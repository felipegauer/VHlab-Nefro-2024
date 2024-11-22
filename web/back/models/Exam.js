const mongoose = require('mongoose');


const examSchema = mongoose.Schema(
    {
        codigo:{type:String, required:'Codigo is required'},
        dataset:{type:String, required:'Dataset is required'},
        exams:{type:Array, required:'Exams is required'},
    });

module.exports = mongoose.model('Exam',examSchema);