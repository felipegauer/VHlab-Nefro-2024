const Dataset = require('../models/Dataset')


const datasetController = {
    all: async function(req, res) {
        try {
            const datasets = await Dataset.find()
            res.json(datasets.map(d => d.name))
        } catch (error) {
            res.status(404).json({ err: error })
        }
    },


    info: async function(req, res) {
        try {
            let name = req.params.dataset;
            const dataset = await Dataset.findOne({ name: name })
            res.json({
                nome:dataset.name, 
                inicio:dataset.inicio, 
                fim:dataset.fim, 
                mortos:dataset.mortos,
                pacientes:dataset.pacientes, 
                vivos:dataset.vivos})
        } catch (error) {
            res.status(404).json({ err: error })
        }
    },

    stats: async function(req, res) {
        try {
            let name = req.params.dataset;
            const dataset = await Dataset.findOne({ name: name })
            res.json({
                head:dataset.estatisticas.head,
                body:dataset.estatisticas.body})
        } catch (error) {
            res.status(404).json({ err: error })
        }
    }

}

module.exports = datasetController;