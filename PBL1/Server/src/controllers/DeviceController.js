//index listagem do objeto
//show mostrar um unico objeto
//store criar um objeto
//update alterar um objeto
//destroy deletar um objeto
const Device = require('../models/Device')

module.exports = {
  async getAllDevices(req, res) {
    let devices = await Device.find().populate('topic_id');
    console.log('Found', devices)
    res.json(devices);
  }
}