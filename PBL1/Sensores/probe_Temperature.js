const Probe = require('./Probe')

const server_url = 'http://localhost:3000';
const topicName = ''

var temp = 23;

var temp_probe = new Probe(topic, id, server_url, 5000, () => {
  return temp + Math.floor(Math.random() * 5) + '°C';
});
console.log(`[ ${id} ] Temperature probe; topic: ${topic}`);

(async () => {

})();
temp_probe.start();