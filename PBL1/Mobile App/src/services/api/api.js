export class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  }

  static clientCredentials() {
    return ({
      client_id: 2,
      client_secret: 'ga7zQ6yWV27KnMYjGkVFqp3ACNyZLIcUaXRuwEi9',
      device_type: 'android',
      device_id: '587cba0c926238a8',
      grant_type: "password"
    })
  }

  static get(route, header) {
    return this.xhr(route, null, 'GET', header);
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params, header) {
    return this.xhr(route, params, 'POST', header)
  }

  static delete(route, params, header) {
    return this.xhr(route, params, 'DELETE', header)
  }

  static xhr(route, params, verb, header) {
    const host = 'http://192.168.43.206:3000';
    const url = `${host}${route}`;
    let options = Object.assign({ method: verb }, params ? { body: (header && header['Content-Type'] === 'multipart/form-data') ? params : JSON.stringify(params) } : null);
    options.headers = Api.headers()
    if (header) {
      Object.keys(header).forEach(key => {
        options.headers[key] = header[key];
      });
    }
    return fetch(url, options).then(resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => { throw err });
    });
  }
}