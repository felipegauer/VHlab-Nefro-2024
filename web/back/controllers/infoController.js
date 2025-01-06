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
};

module.exports = infoController;
