import * as request from 'request'
import * as asyncRequest from 'async-request'

export function getPart1 (callback) {
  request.get('http://dev-test.madebywiser.com/part1', callback)
}

export function getPart3 (x): any {
  const auth : string = `Basic ${new Buffer('wiserdev:password').toString('base64')}`
  return asyncRequest(`http://dev-test.madebywiser.com/part3/${x}`, {
    method: 'GET',
    headers: {
      Authorization: auth
    }
  })
}
