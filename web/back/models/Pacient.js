const mongoose = require('mongoose');


const pacientSchema = mongoose.Schema(
    {
        codigo:{type:String, required:'Codigo is required'},
        dataset:{type:String, required:'Dataset is required'},
        desfecho:{type:String, required:'Desfecho is required'},
        idade:{type:Number, required:'Idade is required'},
        sexo:{type:String, required:'Sexo is required'},
        fim:{type:Date, required:'Fim is required'},
        inicio:{type:Date, required:'Inicio is required'},
        range:{type:Number, default:(this.fim-this.inicio)},
    });

module.exports = mongoose.model('Pacient',pacientSchema);