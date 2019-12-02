//index listagem do objeto
//show mostrar um unico objeto
//store criar um objeto
//update alterar um objeto
//destroy deletar um objetow
const Topic = require('../models/Topic')
const UserTopic = require('../models/UserTopic')
const User = require('../models/User')
const Device = require('../models/Device')

module.exports = {
  async subscribeInTopic(req, res) {
    let { user_id, topic_id } = req.body;
    let userTopic = await UserTopic.findOne({ topic_id, user_id });
    if (userTopic) {
      res.status(406).send({ message: 'Você ja se inscreveu nesse tópico' });
    } else {
      userTopic = await UserTopic.create({ topic_id, user_id });
    }
    res.json({
      message: 'Tópico inscrito com sucesso!'
    })
  },

  async unsubscribeInTopic(req, res) {
    let { user_id, topic_id } = req.body;
    let userTopic = await UserTopic.deleteOne({ topic_id, user_id });
    if (!userTopic) {
      return res.status(404).send({ message: 'Não foi encontrado esse tópico' });
    } else {
      console.log('TOPICO >>>', userTopic);
    }
    res.json({
      message: 'Tópico apagado com sucesso!'
    })
  },

  async getMyTopics(req, res) {
    let { user_id } = req.body;
    let user = await User.findOne({ user_id })
    if (!user) {
      return res.status(404).send({ message: "ususario nao encontrado!" });
    }

    let userTopics = await UserTopic.find({ user_id: user }).populate('topic_id')
    let devices = [];
    if (userTopics) {
      for (let i = 0; i < userTopics.length; i++) {
        let topic_id = userTopics[i].topic_id
        console.log('topic', topic_id)
        let device = await Device.findOne({ topic_id }).populate('topic_id')
        console.log('Device', device)
        devices.push(device);
      }
    }
    console.log('Devices', devices);

    res.json(devices);
  }
}