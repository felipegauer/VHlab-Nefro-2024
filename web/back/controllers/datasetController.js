const Dataset = require('../models/Dataset')
const Exam = require('../models/Exam')
const Pacient = require('../models/Pacient')


const datasetController = {
    all: async function (req, res) {
        try {
            const datasets = await Dataset.find()
            res.json(datasets.map(d => d.name))
        } catch (error) {
            res.status(404).json({ err: error })
        }
    },


    info: async function (req, res) {
        try {
            let name = req.params.dataset;
            const dataset = await Dataset.findOne({ name: name })
            res.json({
                nome: dataset.name,
                inicio: dataset.inicio,
                fim: dataset.fim,
                mortos: dataset.mortos,
                pacientes: dataset.pacientes,
                vivos: dataset.vivos
            })
        } catch (error) {
            res.status(404).json({ err: error })
        }
    },

    stats: async function (req, res) {
        try {
            let name = req.params.dataset;
            const dataset = await Dataset.findOne({ name: name })
            res.json({
                head: dataset.estatisticas.head,
                body: dataset.estatisticas.body
            })
        } catch (error) {
            res.status(404).json({ err: error })
        }
    },

    pacients_stats: async function (req, res) { //TODO: Refatorar
        try {
            let name = req.body.dataset
            const exams = await Exam.find({ dataset: name })
            const allStats = {}
            const vivosStats = {}
            const mortosStats = {}

            let vivos = 0
            let mortos = 0
            exams.forEach(p => {
                p.exams.forEach(async e => {
                    let soma = 0
                    let l = 0
                    e.data.forEach(d => {
                        soma += d.y
                        l++
                    })
                    const media = soma / l;

                    allStats[e.name] = allStats[e.name] ? allStats[e.name] + media : media
                    // const pacient = await Pacient.findOne({ codigo: p.codigo })
                    // if(pacient.desfecho === 'Vivo'){
                    //     console.log('vivo');
                        
                    //     vivos++
                    //     vivosStats[e.name] = vivosStats[e.name] ? vivosStats[e.name] + media : media
                    // }else{
                    //     mortos++
                    //     mortosStats[e.name] = mortosStats[e.name] ? mortosStats[e.name] + media : media
                    // }
                    
                });

            })
            
            // for (const key in vivosStats) {
            //     vivosStats[key] = vivosStats[key] / vivos
            // }

            // for (const key in mortosStats) {
            //     mortosStats[key] = mortosStats[key] / mortos
            // }


            for (const key in allStats) {
                allStats[key] = allStats[key] / exams.length
            }


            res.json(allStats)

        } catch (error) {
            res.status(404).json({ err: error })
        }

    }

}

module.exports = datasetController;