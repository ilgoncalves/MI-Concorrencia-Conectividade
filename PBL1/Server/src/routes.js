const express = require('express');
const BrokerController = require('./controllers/BrokerController');
const SessionController = require('./controllers/SessionController');
const TopicController = require('./controllers/TopicController');
const DeviceController = require('./controllers/DeviceController');
const routes = express.Router();


// pub/sub
routes.post('/subscribe', BrokerController.subscribe)
routes.post('/publish', BrokerController.publish)

//devices
routes.get('/getAllDevices', DeviceController.getAllDevices)
//topics
routes.post('/subscribeInTopic', TopicController.subscribeInTopic)
routes.post('/unsubscribeInTopic', TopicController.unsubscribeInTopic)
routes.get('/getMyTopics', TopicController.getMyTopics)

// session
routes.post('/sessions', SessionController.store)

// topic
// routes.get('/getAllTopics', TopicController.index)

// // device

// routes.get('/getAllDevices', DeviceController.index)

// //spot
// routes.post('/spots', upload.single('image'), SpotController.store)
// routes.get('/spots', SpotController.index)
// routes.get('/spots/:spot_id/bookings', BookingController.store)
// //dashboard
// routes.get('/getSpotsOfUser', DashboardController.show)


module.exports = routes; 