import request from '../request.js'
export function getRegionList(params) {
  return request.get('/public/region/list', {
    params
  })
}
