const mongoose = require('mongoose');

const UserTopicSchema = new mongoose.Schema({
  topic_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic'
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

module.exports = mongoose.model('UserTopic', UserTopicSchema);