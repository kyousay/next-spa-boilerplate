import axios from 'axios'
import { RNFirebase } from 'react-native-firebase'
import { Dispatch, Middleware } from 'redux'
import { actionCreatorFactory } from 'typescript-fsa'
import { State } from '../modules/reducer'

type Payload<B = any> = {
  type: 'read' | 'create' | 'update' | 'delete'
  path: string
  body?: B
}

const actionCreator = actionCreatorFactory('AXIOS')
export const axiosAction = actionCreator<Payload>('ACTION')

const req = <T = any, D = object>(type: string, url: string, jwt: string, data: D) =>
  axios
    .request<{ results: T }>({
      method: 'post',
      url,
      data: {
        ...data,
        type,
      },
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => res.data.results)

export const read = (path: string) => () =>
  axiosAction({
    type: 'read',
    path,
  })

export const del = <B = object>(path: string, body: B) => () =>
  axiosAction({
    type: 'delete',
    path,
    body,
  })

export const create = <B = object>(path: string, body: B) => () =>
  axiosAction({
    type: 'create',
    path,
    body,
  })

export const update = <B = object>(path: string, body: B) => () =>
  axiosAction({
    type: 'update',
    path,
    body,
  })

const dummyToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdG9yZUlkIjoiYWlyIiwiYWNjb3VudCI6InRlc3QwMSJ9.P1-_jXbK5RdiIuHryL4pSydJSbCkjx40ZKFGmREkkFc'

export default (): Middleware<Dispatch<Payload>, State> => (store) => (next) => (action) => {
  if (action.type !== 'AXIOS/ACTION') return next(action)
  const { type, path, body } = action.payload
  const {
    app: {
      auth: {
        data: { currentUser },
      },
      config: {
        data: { bff, skipAuth },
      },
    },
  } = store.getState()

  return (skipAuth ? Promise.resolve(dummyToken) : (currentUser as RNFirebase.User).getIdToken(false)).then((jwt) =>
    type === 'read' ? req(type, bff + path, jwt, {}) : req(type, bff + path, jwt, body),
  )
}
