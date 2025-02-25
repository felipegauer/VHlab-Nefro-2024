const Info = require("../models/Info");

const infoController = {
  info: async function (req, res) {
    try {
      let name = req.params.exam;
      const info = await Info.findOne({ exam: name });
      res.json({
        exam: info.exam,
        low: info.low,
        high: info.high,
      });
    } catch (error) {
      res.status(404).json({ err: error });
    }
  },

  all: async function (req, res) {
    try {
      const info = await Info.find({});
      res.json(
        info.map((i) => {
          return { exam: i.exam, low: i.low, high: i.high };
        })
      );
    } catch (error) {
      res.status(404).json({ err: error });
    }
  },

  create_update: async function (req, res) {
    try {
      const annotations = req.body;
      for (const exam in annotations) {
        const info = await Info.findOne({ exam: exam });
        if (info) {
          info.low = annotations[exam].low;
          info.high = annotations[exam].high;
          await info.save();
        } else {
          const newInfo = new Info({
            exam: exam,
            low: annotations[exam].low,
            high: annotations[exam].high,
          });
          await newInfo.save();
        }
      }
      res.json({ message: "Annotations updated" });
      
    }catch(error){
      res.status(400).json({err:error.message});
    }
  },
};

module.exports = infoController;
