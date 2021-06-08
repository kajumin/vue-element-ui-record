import request from '../request.js'
export function getRegionList(params) {
  return request.get('/region/list', {
    params,
    headers: {
      'x-access-token':
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkZWZhdWx0XzYwOTY4NzhmMTg5MGMyNTdlMjcxNWNlMiIsImlhdCI6MTYyMjY4NzU2MiwibmJmIjoxNjIyNjg3NTYyLCJleHAiOjE2MjI3NzM5NjIsImFwcF9pZCI6IjYwOTY4NzhmY2QwNGYyNWY1YjBkZDU5OCIsInVzZXJfaWQiOiI2MDk2ODc4ZjE4OTBjMjU3ZTI3MTVjZTIiLCJ1c2VybmFtZSI6ImFkbWluIiwibW9iaWxlIjoiMTU2MDcwMDg4NjMiLCJhY2NvdW50X3R5cGUiOiJhcHBfYWRtaW4iLCJqd3Rfc2NlbmUiOiJkZWZhdWx0In0.QmbRr50nz49jzmnD4qKRZqDTiLT9X3uPSSKaEwi71eg',
      'x-app-domain': 'srcm.business-management',
      'x-app-source-type': 1
    }
  })
}
