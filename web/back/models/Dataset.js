const mongoose = require('mongoose');


const datasetSchema = mongoose.Schema(
    {
        name:{type:String, required:'Name is required'},
        estatisticas:{type:Object, required:'Estatisticas is required'},
        inicio:{type:Date, required:'Inicio is required'},
        fim:{type:Date, required:'Fim is required'},
        mortos:{type:Number, required:'Mortos is required'},
        pacientes:{type:Number, required:'Pacientes is required'},
        vivos:{type:Number, required:'Vivos is required'},
    });

module.exports = mongoose.model('Dataset',datasetSchema);