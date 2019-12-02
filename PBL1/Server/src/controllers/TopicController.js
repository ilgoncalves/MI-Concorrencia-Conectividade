//index listagem do objeto
//show mostrar um unico objeto
//store criar um objeto
//update alterar um objeto
//destroy deletar um objetow
const Topic = require('../models/Topic')
const UserTopic = require('../models/UserTopic')

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
  }
}