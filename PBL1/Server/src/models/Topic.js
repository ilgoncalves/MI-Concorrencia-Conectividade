const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  topicName: String
});

module.exports = mongoose.model('Topic', TopicSchema);