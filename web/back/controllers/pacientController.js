const Pacient = require('../models/Pacient');
const Exam = require('../models/Exam');
 
const pacientController = {
    getPacients: async function(req, res) {
        let dataset = req.params.dataset;
        let p = await Pacient.find({ dataset: dataset});
        res.json(p.map((pacient)=>{return {
            codigo: pacient.codigo,
            desfecho: pacient.desfecho,
            idade: pacient.idade,
            sexo: pacient.sexo,
            range: pacient.range}}));
    },

    getPacientExam: async function(req, res) {
        let codigo = req.params.codigo;
        let dataset = req.params.dataset;
        try {
            let exams = await Exam.findOne({codigo: codigo, dataset: dataset});
            if (!exams) throw new Error('Pacient not found');
            res.json(exams);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    getPacient: async function(req, res) {
        let codigo = req.params.codigo;
        let dataset = req.params.dataset;
        try {
            let pacient = await Pacient.findOne({codigo: codigo, dataset: dataset});
            if (!pacient) throw new Error('Pacient not found');
            res.json(pacient);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = pacientController;