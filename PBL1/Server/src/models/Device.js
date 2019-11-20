const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    description: String,
    topic_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    }
})

module.exports = mongoose.model('Device', DeviceSchema)