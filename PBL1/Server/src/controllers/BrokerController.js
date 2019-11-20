//index listagem do objeto
//show mostrar um unico objeto
//store criar um objeto
//update alterar um objeto
//destroy deletar um objeto
const Device = require('../models/Device');
const Topic = require('../models/Topic');
const User = require('../models/User');
const UserTopic = require('../models/UserTopic');

// Para o usuario se inscrever em um topic:

// endpoint:'/subscribe'
// body:{
//   topicName:'test/test',
//   user_id:'5dd5a315fc77a39b1f141532'
// }

// Para o dipositivo se inscrever em um topico:

// endpoint:'/subscribe'
// body:{
//   topicName:'test/test',
//   description_device:'ar condicionado'
// }

module.exports = {
  async subscribe(req, res) {
    let { topicName, user_id, description_device } = req.body;
    let topic = await Topic.findOne({ topicName });

    if (!topic) {
      topic = await Topic.create({ topicName });
    }

    user_id = await User.findOne({ _id: user_id })

    if (user_id) {
      user_id = user_id._id
    }

    if (user_id) {
      const user_topic = await UserTopic.create({ user_id, topic_id: topic._id });
      res.json(user_topic);
    } else if (description_device) {
      const device = await Device.create({ description: description_device, topic_id: topic._id });
      res.json(device);
    } else {
      res.status(400).send('Não foi identificado nem um usuario nem um dispositivo.');
    }

  }
}