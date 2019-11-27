const axios = require('axios');

module.exports = class Probe {
    /**
     *Creates an instance of Probe.
     * @param {*} topic Topic to publish to
     */

    constructor(url) {
        this.url = url;
        

    }

    /**
     * Starts the production of data for the probe and publishes
     * data to server route
     *
     */
    start() {
        setInterval(() => {
            axios({
                method: 'POST',
                url: this.url,
                data: {
                    
                }
            })
                .catch(err => {
                    console.log('[FAIL] Axios Request error');
                })
        }, this.timeout);
    }

}
